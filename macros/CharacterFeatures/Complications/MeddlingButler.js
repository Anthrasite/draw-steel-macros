//@id=duHw3A0TGifYaJkg
//@name=Meddling Butler
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Meddling Butler`,
  description: `<p>You’re not sure what you did to deserve it, but for some reason, your family saddled you with an old, trusted, and extremely irritating family servant. They’re supremely competent, of course, but they sometimes seem to forget who’s in charge.</p>
    <p><b>Benefit:</b> You have a retainer, in addition to any followers you acquire through Renown or other means. As usual, you can have only one retainer in your service at a time.</p>
    <p><b>Drawback:</b> Outside of combat, your retainer is under the Director’s control. The retainer sometimes acts without orders—always with your best interests at heart, but often in embarrassing or inconvenient ways.</p>`,
  source: `Complication`,
});

