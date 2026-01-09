//@id=RriBKUJI7OkQP8Ve
//@name=Lightning Soul
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Lightning Soul",
  description: `You were caught in a storm and struck by lightning—but something saved you from death. Perhaps it was a gods-given miracle, a latent psionic gift, or the magic of a helpful elementalist, but you absorbed the lightning into your body. It’s always there now, simmering under the surface.</p>
    <p><b>Benefit:</b> Whenever you regain Stamina in combat, you gain 1 surge. Whenever you spend a surge to deal extra damage, you can make that extra damage into lightning damage.</p>
    <p><b>Drawback:</b> Whenever you are wet, you have damage weakness 5.</p>`,
  source: "Complication"
});

