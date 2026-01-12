//@id=OsPo47LKGFuajc06
//@name=Raised by Beasts
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Raised by Beasts`,
  description: `<p>You were orphaned or lost in the wild, and a friendly animal pack (perhaps apes, bears, or wolves) took you in. Returning to so-called civilization was a shock, but you’re now determined to learn all you can about your own kind.</p>
    <p><b>Benefit:</b> You have the Handle Animals skill (from the interpersonal skill group). Additionally, choose a type of animal related to the animals who helped you, such as wolf. You gain an edge on tests that use the Handle Animals skill when interacting with animals of this type. You can also communicate with animals of this type as if you shared a language, and animals of this type aren’t initially hostile to you unless they’re supernaturally compelled to be.</p>
    <p><b>Drawback:</b> You don’t have a culture, though you can speak Caelian.</p>`,
  source: `Complication`,
});

