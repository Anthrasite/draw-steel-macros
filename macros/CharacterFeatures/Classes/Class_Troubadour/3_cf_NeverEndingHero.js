//@id=Mmcgj4IDaRkVe3dy
//@name=“Never-Ending Hero”
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `“Never-Ending Hero”`,
  flavorText: `And toniiight we can truly say ♪ They will alllways find a way! ♪`,
  keywords: `Area, Magic, Performance`,
  type: `No action`,
  distance: `5 aura`,
  target: `Self and each ally in the area`,
  effect: `While this performance is active, each target who starts their turn dying while in the area gains an edge on power rolls and ignores the effects of bleeding until the end of their turn.`,
});
