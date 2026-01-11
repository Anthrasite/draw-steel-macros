//@id=1yt9H5gvFUWCRm86
//@name=Feytouched
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Feytouched",
  description: `<p>Your birth was attended by faeries. A friendly fairy blessed you, granting you strength so you could defend yourself. In response, an unfriendly fairy granted you a life filled with peril so that you might prove your strength.</p>
    <p><b>Benefit and Drawback:</b> At the start of each combat encounter, you can choose to gain 1 additional Heroic Resource. If you do so, the Director gains 3 Malice.</p>`,
  source: "Complication"
});

