//@id=NVTmSznAt6KfY3GR
//@name=Theoretical Warrior
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Theoretical Warrior`,
  description: `<p>Your choice of your Reason or Intuition increases by 1 (to a maximum of 6).</p>
    <p>Additionally, choose a heroic ability belonging to any class. You gain this heroic ability, which can be paid for using the Heroic Resource of your class. You can’t use a heroic ability that requires a class feature you don’t have.</p>`,
  source: `Title`,
});
