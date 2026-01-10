//@id=3Ku4tnl7BcFkZvmw
//@name=Tactical Offensive
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Tactical Offensive",
  description: `When you use the Charge main action to attack a creature marked by you, you can use a signature or heroic ability with the Melee and Strike keywords instead of a melee free strike.`,
  source: "Class"
});
