//@id=T5na3l2eVMrLpDc4
//@name=Minor Miracle
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Minor Miracle",
  description: `<p>As a respite activity, you can perform a religious ritual and beseech the gods to restore a dead creature to life. You must have at least half the creature’s remains, and they must have died within the last 24 hours from an effect that isn’t age related. The creature’s soul must be willing to return to life for the ritual to work. If they are not willing, you instinctively understand that as you start the respite activity and can cease it immediately.</p>
    <p>A creature with a willing soul returns to life at the end of the respite with full Stamina and half their Recoveries. You regain only half your Recoveries at the end of the respite.</p>`,
  source: "Class"
});
