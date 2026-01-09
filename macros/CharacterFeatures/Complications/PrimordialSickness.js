//@id=IShNYfCGyR26HxXW
//@name=Primordial Sickness
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Primordial Sickness",
  description: `You once contracted a terrible illness for which no one could find a cure. You sought out a primordial swamp said to be either cursed or miraculously salubrious. It turned out to be both, keeping your illness at bay while corrupting your body with its unnatural energy.</p>
    <p><b>Benefit:</b> You have corruption immunity 5 and poison immunity 5.</p>
    <p><b>Drawback:</b> Your number of Recoveries is permanently reduced by 1.</p>`,
  source: "Complication"
});

