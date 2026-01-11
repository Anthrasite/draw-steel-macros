//@id=OFG0EgUNm1z2cXKj
//@name=Elemental Inside
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Elemental Inside",
  description: `<p>When an evil mage threatened someone you loved, you blocked that foe’s summoning of an elemental creature by absorbing their magic with your body. You are now infused with the power of that elemental—who isn’t at all happy about it.</p>
    <p><b>Benefit:</b> You gain a +3 bonus to Stamina at 1st level, then again at 4th, 7th, and 10th levels.</p>
    <p><b>Drawback:</b> While you are dying, your possessing elemental takes control of your body. The elemental yearns for destruction, causing you to attack the nearest creature you notice without regard for your desires or your body’s safety. If you don’t do your best to fulfill the elemental’s rage, the Director can take temporary control of your hero.</p>`,
  source: "Complication"
});

