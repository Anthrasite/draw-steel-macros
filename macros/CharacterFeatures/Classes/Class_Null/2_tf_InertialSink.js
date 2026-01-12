//@id=7knxZRP0afTlow9q
//@name=Inertial Sink
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Inertial Sink`,
  description: `<p>You add your Intuition score to your effective size for the purpose of interacting with creatures and objects, such as for determining whether you can lift an object, whether you are affected by forced movement, and so forth. This has no effect on whether you can be grabbed.</p>
    <p>Additionally, when you fall, you reduce the effective height of the fall by 5 squares in addition to any other reductions. Whenever you take damage from being force moved, you reduce that damage by an amount equal to your level.</p>`,
  source: `Class`,
});
