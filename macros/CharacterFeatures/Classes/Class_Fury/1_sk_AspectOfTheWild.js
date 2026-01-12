//@id=UJmYt9WskAMiPbqC
//@name=Aspect of the Wild
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Aspect of the Wild`,
  flavorText: `You assume the form of the animal who channels your ferocity.`,
  keywords: `Magic`,
  type: `Maneuver`,
  distance: `Self`,
  target: `Self`,
  effect: `You can shapeshift into the animal defined by your stormwight kit, into a hybrid form, or back into your true form. While in animal form or hybrid form, you can speak as you usually do, and you can also speak to animals who share your form. If you are in a negotiation with an animal while in animal form, you treat your Renown as 2 higher than usual.`,
  extraResourceCost: `1`,
  extraResourceEffect: `As a free maneuver, you can shapeshift a second time, either into another animal form, into your hybrid form, or back into your true form.`,
});
