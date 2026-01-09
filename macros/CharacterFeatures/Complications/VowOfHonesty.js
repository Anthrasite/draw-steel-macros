//@id=VzTNkpiPEwh20fmK
//@name=Vow of Honesty
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Vow of Honesty",
  description: `You were brought up to a strict standard of behavior. You cannot tell a lie.</p>
    <p><b>Benefit:</b> If a creature is of a lower level than you, you automatically know when they are lying, though you don’t necessarily know the actual truth behind their lie. Additionally, you have a double edge on any test made to persuade a creature of some specific fact.</p>
    <p><b>Drawback:</b> When you lie, your honor is stained and you lose this complication’s benefit. Additionally, you take a bane on any test that uses a skill from the interpersonal skill group. You can lose the bane and regain this complication’s benefit only by doing penance, such as gaining the forgiveness of the creature you lied to.</p>`,
  source: "Complication"
});

