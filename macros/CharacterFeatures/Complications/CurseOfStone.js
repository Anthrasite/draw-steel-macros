//@id=D8oSFBbrXpRfjgYN
//@name=Curse of Stone
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Curse of Stone",
  description: `<p>As a child, you met a creature who turns people to stone, such as a medusa. You escaped half petrified, avoiding the fate of others who stand as statues now.</p>
    <p><b>Benefit:</b> You have a +1 bonus to stability. Additionally, you can use a free maneuver to cause your body, gear, and any items you hold to take on the appearance of stone, making you appear to be a mundane statue while you remain unmoving.</p>
    <p><b>Drawback:</b> You have sonic weakness 5. Additionally, while you are winded, you are dazed.</p>`,
  source: "Complication"
});
