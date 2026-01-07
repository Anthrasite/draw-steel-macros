//@id=jVpT93a16hY8L0Ez
//@name=Foresight
//@img=icons/magic/symbols/star-rising-purple.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Foresight",
  description: `Your senses extend past mundane obscuration and the veil of the future alike. You automatically know the location of any creature with concealment who isn’t hidden from you within 20, and you negate the usual bane on strikes against such creatures. Additionally, whenever you are targeted by a strike, you can use a triggered action to impose a bane on the power roll.`,
  source: "Ancestry"
});
