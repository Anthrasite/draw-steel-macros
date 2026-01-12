//@id=6gchO1uAE5aT2kJf
//@name=Protective Circle
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Protective Circle`,
  description: `You can spend 10 uninterrupted minutes to create a protective circle on the ground large enough to hold one size 1 creature. The circle lasts for 24 hours, until you create another, or until you dismiss it (no action required). Only creatures you designate at the time of drawing the circle can enter and exit the area. While in the protective circle, a creature can’t be targeted by strikes.`,
  source: `Class`,
});
