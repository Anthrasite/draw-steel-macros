//@id=jqyZIFpMGnc78QUH
//@name=Rogue Talent
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Rogue Talent",
  description: `<p>You are the only survivor of a cataclysmic psionic event—an experiment gone wrong, a voiceless talker attack, or some naturally occurring phenomenon of a far-off part of the timescape. It left you with a psionic talent, but also made you vulnerable to telepathic attacks.</p>
    <p><b>Benefit:</b> You have the Telekinetic Grasp ability, which you can use as a ranged free strike.</p>
    <p><b>Drawback:</b> You have psychic weakness 5.</p>`,
  source: "Complication"
});

