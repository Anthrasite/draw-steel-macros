//@id=3hcm8FIfYDAtZU2y
//@name=Exile
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Exile",
  description: `<p>Whether you’re a convicted criminal, a noble stripped of their title, or a person who made one too many enemies, you’ve been cast forth from your homeland, never to return. At least not until you’re strong enough to set things right.</p>
    <p><b>Benefit:</b> You know one extant language of your choice.</p>
    <p><b>Drawback:</b> If any NPC from your homeland recognizes you, whether in your homeland or elsewhere, they attempt to harm you at the Director’s discretion.</p>`,
  source: "Complication"
});

