//@id=DSxRweYM3Xb2mrzJ
//@name=Undead Influence
//@img=icons/magic/death/hand-dirt-undead-zombie.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Undead Influence",
  description: `Your supernatural gifts allow you to influence other undead. You gain an edge on Reason, Intuition, and Presence tests made to interact with undead creatures.`,
  source: "Ancestry"
});
