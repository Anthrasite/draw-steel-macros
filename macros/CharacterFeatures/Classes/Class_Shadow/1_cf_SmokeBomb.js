//@id=IHXYFsxh6kt24nJq
//@name=Smoke Bomb
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Smoke Bomb`,
  description: `You always carry a supply of smoke bombs to use for distractions and easy getaways. You can use the Hide maneuver even if you are observed and don’t initially have cover or concealment. When you do so, you can shift a number of squares equal to your Agility score. If you end this movement with cover or concealment, you are automatically hidden.`,
  source: `Class`,
});
