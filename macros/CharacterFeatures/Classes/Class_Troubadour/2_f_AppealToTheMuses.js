//@id=rkRYu4CKqZeWlpVd
//@name=Appeal to the Muses
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Appeal to the Muses`,
  description: `<p>You can give a rousing speech, invoke your inspirations, or lift your fellows’ spirits, appealing to the muses to heighten a battle’s drama. However, irony is eager to hand your fortune to the villain to achieve the same end.</p>
    <p>Before you roll to gain drama at the start of your turn, you can make your appeal (no action required). If you do, your roll gains the following additional effects:</p>
    <ul>
      <li>If the roll is a 1, you gain 1 additional drama. The Director gains 1d3 Malice.</li>
      <li>If the roll is a 2, you gain 1 Heroic Resource, which you can keep or give to an ally within the distance of your active performance. The Director gains 1 Malice.</li>
      <li>If the roll is a 3, you gain 2 of a Heroic Resource, which you can distribute among yourself and any allies within the distance of your active performance.</li>
    </ul>`,
  source: `Class`,
});
