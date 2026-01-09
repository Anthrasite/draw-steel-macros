//@id=tFMTei4wQ3R61vSE
//@name=Secret Twin
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Secret Twin",
  description: `You have an identical twin—either a sibling or someone who looks so much like you that no one would ever know the difference. Your secret twin had a life you coveted, or perhaps had obligations that couldn’t go unfulfilled. So when they went missing, you stepped in and started living their life. Most folks are none the wiser.</p>
    <p><b>Benefit:</b> You have a 1st-echelon trinket of your choice. This was a signature treasure of your twin, and has their name or sigil written, sewn, or emblazoned on it somewhere.</p>
    <p><b>Drawback:</b> Your twin disappeared because someone wanted them dead. Whenever you finish a respite, roll a d10. On a 1 or 2, the Director can decide that your past catches up with you in the near future in some way—an assassin seeking your twin, someone who knows your real identity and threatens to reveal it, and so forth.</p>`,
  source: "Complication"
});

