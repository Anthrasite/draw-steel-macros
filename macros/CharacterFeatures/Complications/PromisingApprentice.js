//@id=BXOWhkKMFjLu4UPJ
//@name=Promising Apprentice
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Promising Apprentice",
  description: `You were apprenticed to learn a crafting trade. Your mentor said you had a special gift and might well become a master of your craft someday. But before your training was complete, your mentor was killed.</p>
    <p><b>Benefit:</b> You have one skill of your choice from the crafting skill group. Additionally, choose one of your skills from the crafting group. You gain an edge on any test that uses that skill.</p>
    <p><b>Drawback:</b> Whoever killed your mentor cursed you. You take a bane on any test that doesn’t use one of your skills.</p>`,
  source: "Complication"
});

