//@id=Oeyc0i16om4j2DhH
//@name=Stolen Face
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Stolen Face",
  description: `<p>An evil fairy cursed you, leaving you with a blank visage instead of a face. Although you’re able to imitate other peoples’ features, you’d like to have your own back.</p>
    <p><b>Benefit:</b> You can spend 5 uninterrupted minutes to rearrange your face to resemble the face of another creature of your ancestry who you’ve observed before. You have a double edge on tests made to impersonate that creature or to disguise your identity. You are unable to change your hair or other nonfacial features.</p>
    <p><b>Drawback:</b> Whenever you take damage, your face becomes blank, with no eyes, nose, mouth, or ears. This doesn’t affect your senses or your ability to speak. Your face doesn’t return until you use the benefit of this complication to restore it.</p>`,
  source: "Complication"
});

