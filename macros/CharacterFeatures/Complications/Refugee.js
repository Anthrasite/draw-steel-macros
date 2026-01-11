//@id=hrZecWMpws19RnIz
//@name=Refugee
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Refugee",
  description: `<p>A hostile army—perhaps the forces of Ajax, the Iron Saint—conquered your homeland. Your family escaped, but you can’t return home until your oppressors are defeated once and for all.</p>
    <p><b>Benefit:</b> When your family fled your homeland, they left their most valuable asset behind. Work with the Director to determine whether this asset is a trinket or leveled treasure, several points of Wealth, the project source to create a treasure, or the like. This asset is in the hands of the invaders but can be won back as the Director determines.</p>
    <p><b>Drawback:</b> The faction that invaded your homeland wants you captured or dead. Any of their agents or sympathizers attempt to harm you if they recognize you, as the Director determines.</p>`,
  source: "Complication"
});

