//@id=5mc6TrINB42WqzRU
//@name=Outlaw
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Outlaw`,
  description: `<p>You might be a common bandit or an idealistic freedom fighter, but in any event, the authorities don’t approve of your actions. You’ve managed to stay one step ahead of the law so far, but until your name is cleared, you’ve got to keep a low profile.</p>
    <p><b>Benefit:</b> You earn 1 Renown.</p>
    <p><b>Drawback:</b> Law enforcement officials and bounty hunters who recognize you attempt to arrest you.</p>`,
  source: `Complication`,
});

