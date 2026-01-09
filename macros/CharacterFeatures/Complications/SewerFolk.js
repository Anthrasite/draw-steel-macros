//@id=6zUwl2RFEmQ8tJ9H
//@name=Sewer Folk
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Sewer Folk",
  description: `Impoverished or on the run, you spent your formative years living in the sewers of a major city. There, you learned lessons that have served you well, although the miasma of the sewers did permanent damage to your health.</p>
    <p><b>Benefit:</b> You can automatically climb or swim (your choice) at full speed while moving, and you never get lost while underground. Additionally, while in a city with sewers, you and your companions can move from place to place without being detected, as the Director determines.</p>
    <p><b>Drawback:</b> You have poison weakness 5.</p>`,
  source: "Complication"
});

