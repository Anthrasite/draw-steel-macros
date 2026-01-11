//@id=MlPSfKsWAdkDu6Y9
//@name=Corrupted Mentor
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Corrupted Mentor",
  description: `<p>Your mentor taught you everything and you trusted them completely—until they went rogue, betraying you or the organization you both belonged to. Their current whereabouts and activities are unknown, though disturbing rumors are heard from time to time. Even worse, as their former pupil, you’re now under suspicion as well.</p>
    <p><b>Benefit:</b> You know the Corrupt Spirit maneuver, taught to you by your mentor. (In retrospect, that probably should have aroused your suspicion.)</p>
    <p><b>Drawback:</b> You have holy weakness 1. Each time you use Corrupt Spirit, your holy weakness increases by 1, to a maximum equal to your recovery value. Whenever you take holy damage, this weakness resets to 1.</p>`,
  source: "Complication"
});
