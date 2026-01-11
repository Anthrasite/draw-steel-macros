//@id=b6edAsxTiKfhWv7c
//@name=Curse of Caution
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Curse of Caution",
  description: `<p>When you were young, you did something reckless and unthinking that endangered a hag or cost them something dear. The hag cursed you to always take your time, forcing you to be cautious and thorough—even to your detriment. The curse has saved you from trouble a few times, but not being able to get away from trouble might be your downfall if you can’t shake it.</p>
    <p><b>Benefit:</b> Until you’ve taken your turn in a combat round, any strike made against you takes a bane.</p>
    <p><b>Drawback:</b> You have a −1 penalty to speed.</p>`,
  source: "Complication"
});
