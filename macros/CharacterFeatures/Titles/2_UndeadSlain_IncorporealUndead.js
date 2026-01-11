//@id=UZTda5PJXs9u2BOV
//@name=Undead Slain - Incorporeal Undead
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Undead Slain - Incorporeal Undead",
  description: `<p>You return to life 1 minute after being killed with Stamina equal to your winded value. You gain corruption immunity equal to your level and you can move through other creatures and objects. The first time in a combat round that you pass through a creature, that creature takes corruption damage equal to half your level. You don’t take damage from being force moved into objects.</p>
    <p>If you die again, you rise as an undead creature under the Director’s control.</p>`,
  source: "Title"
});
