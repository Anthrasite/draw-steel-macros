//@id=xI37LDUqSHeGAoBl
//@name=Vampire Scion
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Vampire Scion",
  description: `A vampire has bitten you. You’re not undead—or not yet, anyway—but your connection with your vampire progenitor fills you with urges you fight to control.</p>
    <p><b>Benefit:</b> Whenever you make a melee free strike against an adjacent creature, you can do so by biting that creature. If you obtain a tier 3 outcome on the free strike, you gain temporary Stamina equal to the damage dealt. If not lost beforehand, this temporary Stamina lasts until the end of your next respite.</p>
    <p><b>Drawback:</b> While you have temporary Stamina from this complication, you grow visible fangs, you take a bane on Presence tests made to interact with humanoids, and your vampire progenitor can sense your location.</p>`,
  source: "Complication"
});

