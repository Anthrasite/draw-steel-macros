//@id=l3L6IC8UMvtXfZyq
//@name=Waking Dreams
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Waking Dreams",
  description: `<p>You broke a magic amulet, immersing your mind in weird energy that granted you the power of premonition. However, you struggle to control this new gift. Whenever you take a respite, make a Reason test to determine whether you gain this complication’s benefit or drawback.</p>
    <p><b>Benefit:</b> With a tier 2 outcome, you experience a vision of an event currently happening in your world. The vision lasts for only a few seconds, but the information you glean is helpful to you. With a tier 3 outcome, the vision lasts for 1 minute or more.</p>
    <p><b>Drawback:</b> With a tier 1 outcome, you receive a painful vision that is fractal and inscrutable. When you finish the respite, you lose 1 Recovery.</p>`,
  source: "Complication"
});

