//@id=hgIriyJOSqLDTjvc
//@name=Lost Your Head
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Lost Your Head",
  description: `<p>A bredbeddle stole your head! Usually, being beheaded by one of those magical giants is fatal, but your latent psionic ability allows you to survive despite your decapitation.</p>
    <p><b>Benefit:</b> You have the Share Head ability.</p>
    <p><b>Drawback:</b> Having no head, you can’t see, hear, smell, taste, or verbalize except by using the Share Head ability. Additionally, you can’t wear gear that requires a head, such as a helmet or hat.</p>`,
  source: "Complication"
});

