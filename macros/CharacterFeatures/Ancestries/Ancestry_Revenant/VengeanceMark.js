//@id=Fm5wu4T1GSRLkN7i
//@name=Vengeance Mark
//@img=icons/magic/death/hand-dirt-undead-zombie.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Vengeance Mark`,
  description: `<p>As a maneuver, you place a magic sigil on a creature within 10 squares. When you place a sigil, you decide where it appears on the creature’s body, and whether the sigil is visible to only you or to all creatures.</p>
    <p>You always know the direction to the exact location of a creature who bears one of your sigils and is on the same world. You can have a number of active sigils equal to your level, and can remove a sigil from a creature at will (no action required). If you already have the maximum number of sigils activated and you place a new one, your oldest sigil disappears with no other effect.</p>
    <p>Additionally, you gain the Detonate Sigil signature ability. Signature abilities can be used at will.</p>`,
  source: `Ancestry`,
});
