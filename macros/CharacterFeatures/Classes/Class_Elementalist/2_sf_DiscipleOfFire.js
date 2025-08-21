//@id=gCQkcvpU7f40hWxK
//@name=Disciple of Fire
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Disciple of Fire",
  description: `Your connection to fire allows you to protect yourself from it, even as you rip away the protections of others. You have fire immunity equal to 5 plus your level. Additionally, fire damage you deal ignores a target’s fire immunity.</p>
    <p>At the start of a combat encounter, you gain a number of surges equal to your Victories. Whenever you spend a surge to deal extra damage, you can make that damage fire damage.</p>`,
  source: "Class"
});
