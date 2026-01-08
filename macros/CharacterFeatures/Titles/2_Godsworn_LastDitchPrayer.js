//@id=vid510frIOTkB3UL
//@name=Godsworn - Last-Ditch Prayer
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Godsworn - Last-Ditch Prayer",
  description: `As a free maneuver, you recite a prayer for help, gaining a pool of 2d10 of the Heroic Resource granted by your class. This pool disappears at the end of your turn if you haven’t used it. Once you use this benefit, you can’t use it again until you perform another service for a god or saint, or until you gain a level.`,
  source: "Title"
});
