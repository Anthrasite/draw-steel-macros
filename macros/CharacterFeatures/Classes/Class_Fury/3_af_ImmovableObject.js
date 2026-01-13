//@id=oihP1mW67AdFaRXl
//@name=Immovable Object
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Immovable Object`,
  description: `<p>You add your level to your effective size for the purpose of interacting with creatures and objects, including determining whether you can lift an object, are affected by forced movement, and so forth. This has no effect on whether you can be grabbed.</p>
    <p>Additionally, you have a bonus to stability equal to your Might score.</p>`,
  source: `Class`,
});
