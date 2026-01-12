//@id=qAtRuaPhgl3enco6
//@name=Undead Slain - Other Corporeal Undead
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Undead Slain - Other Corporeal Undead`,
  description: `<p>You return to life 1 minute after being killed with Stamina equal to your winded value. You gain corruption immunity equal to your level and when you are reduced to 0 Stamina by damage that isn’t fire or holy damage and your body isn’t destroyed, you can regain half your Stamina and fall prone. Once you use this benefit, you can’t use it again until you earn 10 or more Victories.</p>
    <p>If you die again, you rise as an undead creature under the Director’s control.</p>`,
  source: `Title`,
});
