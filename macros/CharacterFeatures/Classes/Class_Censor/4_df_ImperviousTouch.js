//@id=Wdm5uRkQICS2EVaL
//@name=Impervious Touch
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Impervious Touch`,
  description: `<p>As a maneuver, you can touch an object with a size equal to your Presence score or smaller and place a protective spell on it. The object has immunity all to untyped damage. You can maintain this spell on a number of objects equal to your Presence score, and you can end the spell on any object at any time (no action required).</p>
    <p>Additionally, you can place this spell on a building or vehicle (or a similar structure with the Director’s approval) that is of a size larger than your Presence score. You can place the spell on only one such target at a time, and you can maintain the spell on a larger target and a number of objects equal to your Presence score simultaneously.</p>`,
  source: `Class`,
});
