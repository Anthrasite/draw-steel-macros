//@id=RqYxy5a87oJhKzl9
//@name=Bereaved
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Bereaved`,
  description: `<p>The most important person to you—perhaps a family member, mentor, or lover—was killed. The only thing that keeps you going is the faint connection you have with this person’s spirit, and the hope that one day you can tie up their unfinished business and let them rest.</p>
    <p><b>Benefit:</b> Whenever you don’t know what to do, you can appeal to your loved one’s spirit for help. You spend a hero token to let the Director determine the next thing you do, whether in or out of combat. The Director chooses the best course of action they can think of for you, even if it relies on information you don’t have. If the Director can’t think of a particularly good course of action for you to take, you don’t spend the hero token.</p>
    <p><b>Drawback:</b> You have corruption weakness 5.</p>`,
  source: `Complication`,
});
