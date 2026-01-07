//@id=XSxlEm1wMuQ2Pf0H
//@name=Polder Geist
//@img=icons/magic/light/orbs-hand-gray.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Polder Geist",
  description: `Evading others’ notice gives you freedom to move. At the start of each of your turns during combat, if no enemy has line of effect to you or if you are hidden from or have concealment from any enemy with line of effect to you, you gain a +3 bonus to speed until the end of your turn.`,
  source: "Ancestry"
});
