//@id=DBaFdH8ehPR15Zm2
//@name=War Dog Collar
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "War Dog Collar",
  description: `You wear a loyalty collar from one of Ajax’s war dogs. You’ve managed to rig the collar so it explodes outward while keeping you safe.</p>
    <p><b>Benefit:</b> Even if you are a war dog yourself, other war dogs can’t use their Posthumous Promotion ability on you while you wear your collar. Additionally, you have the Posthumous Retirement ability.</p>
    <p><b>Drawback:</b> Each time you use your Posthumous Retirement ability, the Director can spend 3 Malice to make your collar malfunction and deal its damage to you in addition to the usual targets.</p>`,
  source: "Complication"
});

