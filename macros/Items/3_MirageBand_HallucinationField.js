//@id=mr0TxM4FCSGfAEBa
//@name=Hallucination Field
//@img=icons/commodities/treasure/crown-gold-laurel-wreath.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Hallucination Field`,
  flavorText: `A blanket of illusion twists around you and your allies, making you seem as if you belong wherever you are.`,
  keywords: `Psionic, Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Self and any ally`,
  effect: `Each target is covered by an illusion causing them to appear exactly as any creature (humanoid, animal, undead, and so forth) an observer most expects to see. The illusion ends for all targets if any creature under its effect harms or physically interacts with any creature not affected by the illusion, if you use this ability again, or if you choose to end the effect (no action required). The illusion also ends for any affected ally who moves more than the distance of this ability away from you.`,
});
