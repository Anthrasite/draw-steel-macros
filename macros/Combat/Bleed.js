//@id=3lLfKS2OxPrATEhy
//@name=Bleed
//@img=icons/skills/wounds/blood-drip-droplet-red.webp
try {
  const activeActor = actor;
  await game.macros.getName(`ValidateActorAttributes`).execute({ activeActor });

  const level = (await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName: `level` })).value;

  const roll = await new Roll(`1d6 + ${level}`).evaluate();
  await game.macros.getName(`ShareRoll`).execute({
    activeActor,
    roll,
    flavor: `Bleeding damage`
  });
}
catch (error) {
  ui.notifications.error(error);
}


