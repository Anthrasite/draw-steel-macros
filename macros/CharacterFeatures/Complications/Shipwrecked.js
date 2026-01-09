//@id=LVbYMtRs27CFucBd
//@name=Shipwrecked
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Shipwrecked",
  description: `You are the sole survivor of a shipwreck that left you stranded on a remote and inhospitable island for years. Your struggle to survive there granted you insight into the natural world but distanced you from who you once were.</p>
    <p><b>Benefit:</b> You have two skills of your choice from the exploration skill group.</p>
    <p><b>Drawback:</b> You have forgotten one language you know of your choice.</p>`,
  source: "Complication"
});

