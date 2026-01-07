//@id=Tj6pbJRB0gcyLhHa
//@name=Glamor of Terror
//@img=icons/environment/settlement/watchtower-cliff.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Glamor of Terror",
  description: `When a foe strikes, you reverse the magic of your glamor to instill fear into their heart. Whenever you take damage from a creature, you can use a triggered action to make that creature frightened of you until the end of their next turn.`,
  source: "Ancestry"
});
