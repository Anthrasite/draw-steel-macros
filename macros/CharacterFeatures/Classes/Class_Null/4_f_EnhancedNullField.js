//@id=KPMo8LiZO5rq9YDX
//@name=Enhanced Null Field
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Enhanced Null Field",
  description: `While using your Null Field ability, you disrupt magic and psionic power suffusing the area around you. During combat, any temporary supernatural terrain effects of your level or lower are removed when your aura partially or fully overlaps with their location. Permanent supernatural terrain effects of your level or lower are temporarily negated while your aura overlaps with their location, but return when the aura no longer overlaps with them.`,
  source: "Class"
});
