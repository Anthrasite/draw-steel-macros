//@id=hRLBo6YQivIy9HdN
//@name=Burning Ash
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Burning Ash`,
  description: `The ash you leave behind burns your foes. The first time on a turn that you use a shadow ability to teleport away from or into a space adjacent to an enemy, that enemy takes fire damage equal to your Agility score.`,
  source: `Class`,
});
