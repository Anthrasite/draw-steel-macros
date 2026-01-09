//@id=rt9ybZLNTRpznH7j
//@name=Frostheart
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Frostheart",
  description: `At the edge of the world, you were lost in a winter storm and presumed dead. But an unknown fate or power kept you alive, bringing you back with frosty skin and pale eyes.</p>
    <p><b>Benefit:</b> You have cold immunity 5. Additionally, whenever you make a strike that deals untyped damage, that strike can deal cold damage instead.</p>
    <p><b>Drawback:</b> You have fire weakness 5.</p>`,
  source: "Complication"
});

