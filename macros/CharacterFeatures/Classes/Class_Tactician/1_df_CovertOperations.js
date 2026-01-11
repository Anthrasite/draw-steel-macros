//@id=nou8JMqafEW3GKrh
//@name=Covert Operations
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Covert Operations",
  description: `<p>While in your presence or working according to your plans, each of your allies gains an edge on tests using any skill from the intrigue skill group. Additionally, you can use the Lead skill to assist another creature with any test made using a skill from the intrigue group.</p>
    <p>At the Director’s discretion, you and your allies can use skills from the intrigue skill group to attempt research or reconnaissance during a negotiation instead of outside of a negotiation.</p>`,
  source: "Class"
});
