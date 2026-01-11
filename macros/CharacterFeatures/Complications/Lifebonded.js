//@id=G4mZl8eWpNhnkfsL
//@name=Lifebonded
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Lifebonded",
  description: `<p>In a sinister ritual, your soul has been bound to that of another creature. This might be a companion, a creature you are beholden to, or an enemy. When they die, you die—making you the perfect bodyguard.</p>
    <p><b>Benefit:</b> Choose another creature who doesn’t have the Lifebonded complication. When you die, your body disappears until that creature finishes a respite or earns 1 or more Victories. You then appear next to the creature, fully healed.</p>
    <p><b>Drawback:</b> If the creature you’re bound to dies, you die as well, no matter what other traits or features you have.</p>`,
  source: "Complication"
});

