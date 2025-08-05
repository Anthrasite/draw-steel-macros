//@id=pmCXWnD2uGJFhkg0
//@name=Doomsight
//@img=modules/draw-steel-macros/icons/ancestry/hakaan.png
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Doomsight",
  description: `Working with your Director, you can predetermine an encounter in which you will die. When that encounter begins, you become doomed. While doomed, you automatically obtain a tier 3 outcome on tests and ability rolls, and you don’t die no matter how low your Stamina falls. You then die immediately at the end of the encounter, and can’t be returned to life by any means.</p>
    <p>If you don’t predetermine your death encounter, you can choose to become doomed while you are dying with the Director’s approval (no action required). Doing so should be reserved for encounters in which you are dying as a result of suitable heroism, such as making a last stand against a boss or saving civilians, or when the consequences of your actions have finally caught up to you—not because you’re playing a one-shot and have nothing to lose, Hacaarl.</p>
    <p>Additionally, when your Stamina reaches the negative of your winded value and you are not doomed, you turn to rubble instead of experiencing death. You are unaware of your surroundings in this state, and you can’t regain Stamina or have this effect undone in any way. After 12 hours, you regain Stamina equal to your recovery value.</p>`,
  source: "Ancestry"
});
