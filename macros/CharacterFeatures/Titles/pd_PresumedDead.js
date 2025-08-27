//@id=79xwFUQ5JzPHfnZM
//@name=Presumed Dead
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Presumed Dead",
  description: `While it might appear that you died, you did not. Instead, you regain 1 Stamina and can spend 1 or more Recoveries. Additionally, you gain a 1st-echelon trinket of the Director’s choice.</p>
    <p>At a dramatic moment determined by the Director, you rejoin your party with an explanation for your narrow escape, and how you found your new trinket along the way.</p>`,
  source: "Title"
});
