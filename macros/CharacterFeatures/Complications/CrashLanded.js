//@id=UL7Fk0AhWSjTiJpu
//@name=Crash Landed
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Crash Landed`,
  description: `<p>You used to flit around the stars in your own ship. But an ugly run-in with a pirate (or a pirate hunter) has left you marooned on this backwater world. You’re prepared to carve out a life here—at least until you can hitch a ride somewhere else.</p>
    <p><b>Benefit:</b> You have the Timescape skill (from the lore skill group). Additionally, you have a power pack that you can activate or deactivate as a maneuver. When you activate the power pack, choose an energy type from cold, fire, lightning, or sonic. Until you deactivate the power pack, your damage-dealing abilities deal that damage type.</p>
    <p><b>Drawback:</b> You take a bane on any test made to know about anything related to the world where you crash landed.</p>`,
  source: `Complication`,
});
