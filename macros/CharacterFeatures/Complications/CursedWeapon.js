//@id=ofIb679edapJN8ZT
//@name=Cursed Weapon
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Cursed Weapon`,
  description: `<p>When you were young, you found or were given a magic weapon. Since then, you’ve carried it always at your side, letting it inspire you to lead the life of a hero—even though the weapon is cursed.</p>
    <p><b>Benefit:</b> You have a leveled weapon of your choice.</p>
    <p><b>Drawback:</b> You have damage weakness 2.</p>`,
  source: `Complication`,
});
