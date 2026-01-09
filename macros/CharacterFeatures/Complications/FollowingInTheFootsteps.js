//@id=0gojL8nGprzedFhA
//@name=Following in the Footsteps
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Following in the Footsteps",
  description: `Your personal idol was a mighty hero, and you have modeled yourself after them. From studying the many heroic tales told of them, you hope to someday learn your idol’s most famous battle technique.</p>
    <p><b>Benefit:</b> Choose a heroic ability for your class of a higher level than you currently are. When you take this ability in future, its Heroic Resource cost is permanently reduced by 2 (to a minimum of 1).</p>
    <p><b>Drawback:</b> In your quest for advanced techniques, you have neglected the basics. Choose a heroic ability you already know. That ability’s Heroic Resource cost is permanently increased by 1.</p>`,
  source: "Complication"
});

