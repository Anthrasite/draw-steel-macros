//@id=wxzRAVPDMEyIoFSg
//@name=ShareAbility
//@img=icons/svg/dice-target.svg
try {
  const activeActor = await game.macros.getName(`ValidateParameter`).execute({ name: `activeActor`, value: scope.activeActor, type: `object` });
  await game.macros.getName("ValidateActorAttributes").execute({ activeActor });

  const name = await game.macros.getName(`ValidateParameter`).execute({ name: `name`, value: scope.name, type: `string` });
  const resourceCost = await game.macros.getName(`ValidateParameter`).execute({ name: `resourceCost`, value: scope.resourceCost, type: `number`, nullable: true });
  const flavorText = await game.macros.getName(`ValidateParameter`).execute({ name: `flavorText`, value: scope.flavorText, type: `string`, nullable: true });
  const description = await game.macros.getName(`ValidateParameter`).execute({ name: `description`, value: scope.description, type: `string`, nullable: true });
  const type = await game.macros.getName(`ValidateParameter`).execute({ name: `type`, value: scope.type, type: `string` });
  const keywords = await game.macros.getName(`ValidateParameter`).execute({ name: `keywords`, value: scope.keywords, type: `string`, nullable: true });
  const isKit = await game.macros.getName(`ValidateParameter`).execute({ name: `isKit`, value: scope.isKit, type: `boolean`, nullable: true });
  const distance = await game.macros.getName(`ValidateParameter`).execute({ name: `distance`, value: scope.distance, type: `string`, nullable: true });
  const target = await game.macros.getName(`ValidateParameter`).execute({ name: `target`, value: scope.target, type: `string`, nullable: true });
  const trigger = await game.macros.getName(`ValidateParameter`).execute({ name: `trigger`, value: scope.trigger, type: `string`, nullable: true });
  const powerRollStat = await game.macros.getName(`ValidateParameter`).execute({ name: `powerRollStat`, value: scope.powerRollStat, type: `string`, nullable: true });
  const tier1Effect = await game.macros.getName(`ValidateParameter`).execute({ name: `tier1Effect`, value: scope.tier1Effect, type: `string`, nullable: true });
  const tier2Effect = await game.macros.getName(`ValidateParameter`).execute({ name: `tier2Effect`, value: scope.tier2Effect, type: `string`, nullable: true });
  const tier3Effect = await game.macros.getName(`ValidateParameter`).execute({ name: `tier3Effect`, value: scope.tier3Effect, type: `string`, nullable: true });
  const effect = await game.macros.getName(`ValidateParameter`).execute({ name: `effect`, value: scope.effect, type: `string`, nullable: true });
  const extraResourceCost = await game.macros.getName(`ValidateParameter`).execute({ name: `extraResourceCost`, value: scope.extraResourceCost, type: `string`, nullable: true });
  const extraResourceEffect = await game.macros.getName(`ValidateParameter`).execute({ name: `extraResourceEffect`, value: scope.extraResourceEffect, type: `string`, nullable: true });
  const persistentCost = await game.macros.getName(`ValidateParameter`).execute({ name: `persistentCost`, value: scope.persistentCost, type: `number`, nullable: true });
  const persistentEffect = await game.macros.getName(`ValidateParameter`).execute({ name: `persistentEffect`, value: scope.persistentEffect, type: `string`, nullable: true });

  const getExtraDamageFunc = await game.macros.getName(`ValidateParameter`).execute({ name: `getExtraDamageFunc`, value: scope.getExtraDamageFunc, type: `function`, nullable: true });
  const beforeRollFunc = await game.macros.getName(`ValidateParameter`).execute({ name: `beforeRollFunc`, value: scope.beforeRollFunc, type: `function`, nullable: true });
  const afterRollFunc = await game.macros.getName(`ValidateParameter`).execute({ name: `afterRollFunc`, value: scope.afterRollFunc, type: `function`, nullable: true });

  // Perform additional validation
  if (name.includes(`:`) || name.includes(`;`))
    throw `Error: name cannot include ":" or ";"`;
  if (typeof(resourceCost) !== `undefined` && resourceCost === 0)
    throw `Error: resourceCost cannot be 0`;
  if (typeof(trigger) !== `undefined` && !type.toLowerCase().includes("triggered"))
    throw `Error: trigger can only be specified for triggered actions`;
  if (typeof(powerRollStat) !== typeof(tier1Effect) || typeof(powerRollStat) !== typeof(tier2Effect) || typeof(powerRollStat) !== typeof(tier3Effect))
    throw `Error: powerRollStat, tier1Effect, tier2Effect, and tier3Effect must be specified together`;
  if (typeof(extraResourceCost) !== typeof(extraResourceEffect))
    throw `Error: extraResourceCost and extraResourceEffect must be specified together`;
  if (typeof(extraResourceCost) !== `undefined` && !/[1-9][0-9]*\+?/.test(extraResourceCost))
    throw `Error: extraResourceCost cannot be 0`;
  if ((typeof(persistentCost) !== `undefined` || typeof(persistentEffect) !== `undefined`) && (typeof(persistentCost) !== `number` || typeof(persistentEffect) !== `string`))
    throw `Error: persistentCost and persistentEffect must be specified together`;
  if (typeof(persistentCost) !== `undefined` && persistentCost === 0)
    throw `Error: persistentCost cannot be 0`;

  // Calculate values for showing the "Use" button
  const buttonId = await game.macros.getName(`GetUUID`).execute();

  const resource = await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName: `resource` });

  const showUseButton = resourceCost || extraResourceCost || powerRollStat || beforeRollFunc || afterRollFunc;
  const canUse = showUseButton && (typeof(resourceCost) === `undefined` || resource.value >= resourceCost);

  // Calculate the colour for the ability type
  const actionColor = type === `Main action` ? `rgb(166, 28, 0)`
    : type === `Maneuver` ? `rgb(61, 133, 198)`
    : type === `Triggered` ? `rgb(56, 118, 29)`
    : type === `Free triggered` ? `rgb(191, 144, 0)`
    : `black`;

  // Define functions for highlighting any potencies or characteristics in power roll results
  function highlightPotency(tierEffect) {
    return tierEffect.replaceAll(/([MAIRP]\s+<\s+[A-Za-z0-9]+)/g, `<span style="color: white; background-color: black; padding: 0px 3px; border-radius: 3px; white-space: nowrap;">$1</span>`);
  }

  function highlightCharacteristic(tierEffect) {
    return tierEffect.replaceAll(/(\s)([MAIRP])([\s,])/g, `$1<span style="color: white; background-color: black; padding: 0px 2px; border-radius: 2px;">$2</span>$3`);
  }

  function includeClosingPIfNotClosed(text) {
    return `${text}${text.includes(`</p>`) ? `` : `</p>`}`;
  }

  // Show the ability in the chat
  await ChatMessage.create({
    user: game.user._id,
    speaker: ChatMessage.getSpeaker(),
    flags: { "core.canPopout": true },
    content:
      `<h2 style="border-color: ${actionColor}; border-width: 2px;">${name}${(resourceCost ? ` <span style="font-size: 80%; font-style: italic;"> (${resourceCost} ${resource.label})</span>` : ``)}</h2>
      ${(flavorText? `<p style="font-style: italic;">${flavorText}</p>` : ``)}
      <table style="border: 0px; table-layout: fixed;">
      ${(keywords ? `
        <tr>
          <td><b>Keywords:</b> ${keywords}</td>
        </tr>
      ` : ``)}
        <tr>
          <td><b>Type:</b> ${type}</td>
        </tr>
      ${(distance ? `
        <tr>
          <td><b>Distance:</b> ${distance}</td>
        </tr>
      ` : ``)}
      ${(target ? `
        <tr>
          <td><b>Target:</b> ${target}</td>
        </tr>
      ` : ``)}
      </table>
      ${(description ? `<p>${includeClosingPIfNotClosed(description)}` : ``)}
      ${(trigger ? `<p><b>Trigger:</b> ${trigger}</p>` : ``)}
      ${(powerRollStat ? `
        <p style="font-weight: bold;">Power Roll + ${powerRollStat}:</p>
        <table style="border: 0; background: rgba(0, 0, 0, 0);">
          <tbody>
            <tr style="background-color: rgba(0, 0, 0, 0);">
              <td style="white-space: nowrap; text-align: center; padding: 4px 0 0 0; vertical-align: top;">
                <div style="padding: 0 2px; border: 1px solid black; border-radius: 4px;"><b>≤11</b></div>
              </td>
              <td style="line-height: 1.3; padding: 4px 0 0 8px; width: 100%;">${highlightCharacteristic(highlightPotency(tier1Effect))}</td>
            </tr>
            <tr style="background-color: rgba(0, 0, 0, 0);">
              <td style="white-space: nowrap; text-align: center; padding: 4px 0 0 0; vertical-align: top; margin-right: 20px;">
                <div style="padding: 0 2px; border: 1px solid black; border-radius: 4px;"><b>12-16</b></div>
              </td>
              <td style="line-height: 1.3; padding: 4px 0 0 8px; width: 100%;">${highlightCharacteristic(highlightPotency(tier2Effect))}</td>
            </tr>
            <tr style="background-color: rgba(0, 0, 0, 0);">
              <td style="white-space: nowrap; text-align: center; padding: 4px 0 0 0; vertical-align: top;">
                <div style="padding: 0 2px; border: 1px solid black; border-radius: 4px;"><b>17+</b></div>
              </td>
              <td style="line-height: 1.3; padding: 4px 0 0 8px; width: 100%;">${highlightCharacteristic(highlightPotency(tier3Effect))}</td>
            </tr>
          </tbody>
        </table>
      ` : ``)}
      ${(effect ? `<p><b>Effect:</b> ${includeClosingPIfNotClosed(highlightPotency(effect))}` : ``)}
      ${(persistentCost ? `<p><b>Persistent ${persistentCost}:</b> ${includeClosingPIfNotClosed(persistentEffect)}` : ``)}
      ${(extraResourceCost ? `<p><b>Spend ${extraResourceCost} ${resource.label}:</b> ${includeClosingPIfNotClosed(highlightPotency(extraResourceEffect))}` : ``)}
      ${(showUseButton ? `<button id="${buttonId}">${(canUse ? `Use` : `Not enough ${resource.label}`)}</button>` : ``)}`
  });

  // Register event for the "Use" button
  if (showUseButton) {
    $(document).on(`click`, `#${buttonId}`, async function() {
      const button = $(this);
      await game.macros.getName(`UseAbility`).execute({
        activeActor,
        button,
        name,
        keywords,
        isKit,
        resourceCost,
        extraResourceCost,
        persistentCost,
        powerRollStat,
        tier1Effect,
        tier2Effect,
        tier3Effect,
        getExtraDamageFunc,
        beforeRollFunc,
        afterRollFunc
      });
    });
  }
}
catch (error) {
  ui.notifications.error(error);
}
