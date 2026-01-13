//@id=5qyUEti0nehGY3dV
//@name=Nature’s Knight
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Nature’s Knight`,
  description: `<p>You can speak with animals and elementals. Additionally, you automatically sense the presence of animals and elementals within 10 squares of you, even if they are hidden.</p>
    <p>When you are in a negotiation with an animal or elemental, you treat your Renown as 1 higher than usual. This stacks with the increase to your effective Renown in a negotiation with an animal of your type while in animal form.</p>`,
  source: `Class`,
});
