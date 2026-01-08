//@id=PoL1T2uCGJOjFmRl
//@name=Dwarven Legionnaire - Rune of Alarm
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Dwarven Legionnaire - Rune of Alarm",
  description: `You can spend 10 uninterrupted minutes to inscribe a magic eye-shaped rune on a surface. The rune sheds light for 2 squares. The rune is dispelled 1 minute after it is activated or if you inscribe the rune elsewhere. The rune activates when an enemy comes within 2 squares of it. When the rune is activated, you wake up if you are nonmagically asleep, and you can perceive through the rune for 1 minute as if you were in its square.`,
  source: "Title"
});
