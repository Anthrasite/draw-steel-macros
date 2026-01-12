//@id=DQsFcn7O0MbPHZwv
//@name=Master Librarian - I Have Just the Book
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Master Librarian - I Have Just the Book`,
  description: `If you start a Discover Lore project in your hero’s stronghold or other a permanent base of operations you immediately gain 60 project points toward the completion of that project. If the project costs 60 or fewer points, you complete it in 10 uninterrupted minutes without needing to use a respite activity.`,
  source: `Title`,
});
