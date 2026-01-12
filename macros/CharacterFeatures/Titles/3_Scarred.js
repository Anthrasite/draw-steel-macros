//@id=jPdGNhy0RKO6E4up
//@name=Scarred
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Scarred`,
  description: `<p>You gain a visible scar in a location of your choice. Additionally, your Stamina maximum increases by 20, and the creature who scarred you takes a bane on abilities against you.</p>
    <p>You can gain this title multiple times. The second and each subsequent time that you gain it, your Stamima maximum doesn't increase.</p>`,
  source: `Title`,
});
