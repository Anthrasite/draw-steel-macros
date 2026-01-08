//@id=Ubep0LSZDAujhv9x
//@name=Mage Hunter - Stink of Magic
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Mage Hunter - Stink of Magic",
  description: `As a maneuver, you open your senses to the residue of magic. Until the end of your next turn, you are aware of whether each creature within 5 squares is a construct, an undead, or a creature from another world, and whether they have used a magic ability in the previous hour. Additionally, you can’t be surprised by constructs, undead, or creatures from another world.`,
  source: "Title"
});
