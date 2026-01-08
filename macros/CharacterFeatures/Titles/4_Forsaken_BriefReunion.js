//@id=sKGFZEndzhIaofOP
//@name=Forsaken - Brief Reunion
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Forsaken - Brief Reunion",
  description: `A characteristic of your choice increases by 1 (to a maximum of 6).</p>
    <p>Additionally, while you’re winded, you can use a maneuver to summon the artifact to your hand. It disappears at the end of your next turn. Once you use this benefit, you can’t use it again until you earn 1 or more Victories.</p>`,
  source: "Title"
});
