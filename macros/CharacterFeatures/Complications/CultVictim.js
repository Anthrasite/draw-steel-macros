//@id=Qz1YXLW8skl9wcU5
//@name=Cult Victim
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Cult Victim",
  description: `Cultists captured you while raiding your home, then began an unholy ritual to turn your body into an undead spirit. Though the ritual failed, your body became infused with corrupted magic, turning you partially incorporeal.</p>
    <p><b>Benefit:</b> Once per turn, you can move through solid matter 1 square thick or less. If you end your turn inside solid matter, you are forced out into the space from which you entered it and you take 5 damage that can’t be reduced in any way.</p>
    <p><b>Drawback:</b> You have corruption weakness 5.</p>`,
  source: "Complication"
});
