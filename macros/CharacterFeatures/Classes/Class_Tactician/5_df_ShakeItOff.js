//@id=a8DoEK92FCAryzxN
//@name=Shake It Off
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Shake It Off",
  description: `As a free maneuver, you can spend 1d6 Stamina to ignore a consequence from a test, or to end one effect on you that is ended by a saving throw or that ends at the end of your turn. Any ally adjacent to you can also spend Stamina as a free maneuver to gain this benefit.`,
  source: "Class"
});
