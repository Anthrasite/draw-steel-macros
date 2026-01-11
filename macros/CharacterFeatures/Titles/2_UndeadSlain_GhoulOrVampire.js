//@id=mrdq8kGp6bTFM7l0
//@name=Undead Slain - Ghoul or Vampire
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Undead Slain - Ghoul or Vampire",
  description: `<p>You return to life 1 minute after being killed with Stamina equal to your winded value. You gain corruption immunity equal to your level and when you make a melee free strike against an adjacent creature, you can bite that creature. If you do so and obtain a tier 3 outcome, you gain temporary Stamina equal to the damage dealt. If not lost beforehand, this temporary Stamina lasts until the end of your next respite.</p>
    <p>If you die again, you rise as an undead creature under the Director’s control.</p>`,
  source: "Title"
});
