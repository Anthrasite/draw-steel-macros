//@id=hVquXfKGs2klS4F6
//@name=Fleet Admiral - Weather Wizard
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Fleet Admiral - Weather Wizard",
  description: `<p>Once per day, you can spend 10 uninterrupted minutes to magically alter mundane weather in a 5-mile radius around you. The weather moves with you and persists for 6 hours or until you dismiss it as a free maneuver. Choose from one of the following weather types:</p>
    <p><em>Calm:</em> Wind-powered vessels and technology cease working.</p>
    <p><em>Fog:</em> Visibility is reduced to 6 squares.</p>
    <p><em>High Winds:</em> The speed of wind-powered vessels is doubled.</p>
    <p><em>Light Winds:</em> No effects due to weather.</p>
    <p><em>Storm:</em> The crew of an unsheltered wind-powered vessel must make a medium group Reason test. On a failure, the vessel needs repairs and moves at half speed until those repairs are made.</p>`,
  source: "Title"
});
