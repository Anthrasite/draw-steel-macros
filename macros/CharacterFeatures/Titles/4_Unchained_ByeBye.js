//@id=zD5I0SNyAUwaKk98
//@name=Unchained - Bye-Bye
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Unchained - Bye-Bye",
  description: `Your choice of your Might or Agility increases by 1 (to a maximum of 6).</p>
    <p>Additionally, you can use a maneuver to teleport yourself and each willing ally within 5 squares of you to new positions within 10 squares of your original starting point. Once you use this benefit, you can’t use it again until you earn 1 or more Victories.</p>`,
  source: "Title"
});
