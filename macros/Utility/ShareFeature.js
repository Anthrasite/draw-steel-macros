//@id=aUX7yxzO8WBIhCKP
//@name=ShareFeature
//@img=icons/svg/dice-target.svg
try {
  const activeActor = await game.macros.getName(`ValidateParameter`).execute({ name: `activeActor`, value: scope.activeActor, type: `object` });
  await game.macros.getName("ValidateActorAttributes").execute({ activeActor });

  const name = await game.macros.getName(`ValidateParameter`).execute({ name: `name`, value: scope.name, type: `string` });
  const description = await game.macros.getName(`ValidateParameter`).execute({ name: `description`, value: scope.description, type: `string` });
  const source = await game.macros.getName(`ValidateParameter`).execute({ name: `source`, value: scope.source, type: `string` });

  const onUseFunc = await game.macros.getName(`ValidateParameter`).execute({ name: `onUseFunc`, value: scope.onUseFunc, type: `function`, nullable: true });

  // Calculate values for showing the "Use" button
  const buttonId = await game.macros.getName(`GetUUID`).execute();

  // Define function for highlighting any potencies in ability descriptions
  function highlightPotency(description) {
    return description.replaceAll(/([MAIRP]\s+<\s+[A-Za-z0-9]+)/g, `<span style="color: white; background-color: black; padding: 0px 3px; border-radius: 3px; white-space: nowrap;">$1</span>`);
  }

  // Show the ability in the chat
  await ChatMessage.create({
    user: game.user._id,
    speaker: ChatMessage.getSpeaker(),
    flags: { "core.canPopout": true },
    content:
      `<h2 style="border-color: black; border-width: 2px;">${name} <span style="font-size: 80%; color: gray;"> [${source}]</span></h2>
      <p>${highlightPotency(description)}${description.includes(`</p>`) ? `` : `</p>`}
      ${(onUseFunc ? `<button id="${buttonId}">Use</button>` : ``)}`
  });

  // Register event for the "Use" button
  if (onUseFunc) {
    $(document).on(`click`, `#${buttonId}`, async function() {
      await onUseFunc();

      // Disable this event and delete the button
      $(this).off(`click`);
      $(this).remove();
    });
  }
}
catch (error) {
  ui.notifications.error(error);
}
