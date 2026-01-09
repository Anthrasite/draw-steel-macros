//@id=DrOYyLcWmCkN4IhU
//@name=Waterborn
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Waterborn",
  description: `You nearly lost your life at sea, but then you heard the voice. Someone—or something—in the water called out to you, telling you to swim. The ocean was suddenly no longer your doom but your parent, granting you a fragment of its power. But for what purpose, you can’t be sure.</p>
    <p><b>Benefit:</b> You can automatically swim at full speed while moving, and you can breathe underwater. Additionally, you have the Rogue Wave ability.</p>
    <p><b>Drawback:</b> You have lightning weakness 5. Additionally, the ocean or a creature it sends to seek you can assign you a quest. If you don’t do the ocean’s bidding, it might temporarily deny you this complication’s benefits—including being able to breathe underwater—at an inconvenient time.</p>`,
  source: "Complication"
});

