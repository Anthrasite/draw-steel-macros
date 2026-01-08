//@id=DPh8opLsCmBFtqXi
//@name=Special Agent - Boffin
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Special Agent - Boffin",
  description: `You gain a small magic spy device called a boffin. Once per encounter, you can activate one the following boffin properties as a maneuver:</p>
    <ul>
      <li>Make a test that uses the Disguise skill. You gain an edge on the test.</li>
      <li>One mundane lock you touch is unlocked.</li>
      <li>Choose a square within 10 squares, even if you don’t have line of effect to it. You can observe the area around that square as if you were in it.</li>
      <li>You throw the boffin up to 10 squares, where it explodes in a 5 cube. Each creature in the area takes fire damage equal to 2d10 + your level. The boffin is permanently destroyed but can be replaced by your spymaster … though they don’t like doing so too often.</li>
    </ul>`,
  source: "Title"
});
