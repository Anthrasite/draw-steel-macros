//@id=lHMrSN79gCu1TIp0
//@name=Wodewalker
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Wodewalker",
  description: `You were dying in the wode, collapsing while starving and wounded. When you woke, you discovered that a group of green elementalists had saved your life by infusing the regenerative bark of a tree to your body.</p>
    <p><b>Benefit:</b> Your recovery value increases by an amount equal to your highest characteristic score.</p>
    <p><b>Drawback:</b> You have fire weakness 5.</p>`,
  source: "Complication"
});

