//@id=fClatoPhBIAMUyT3
//@name=Scene Partner
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Scene Partner`,
  description: `<p>Whenever you obtain a success on a test to interact with an NPC using a skill from the interpersonal group, you can form a bond with that NPC. When you enter into a negotiation with a bonded NPC, their patience increases by 1 (to a maximum of 5). Additionally, the first time during a negotiation that you personally make an argument that would increase a bonded NPC’s interest by 1, you instead increase their interest by 2 (to a maximum of 5).</p>
    <p>You can have a number of bonds active equal to your level. When you form a bond with a new NPC that would exceed the limit, you must choose which of your active bonds to lose.</p>`,
  source: `Class`,
});
