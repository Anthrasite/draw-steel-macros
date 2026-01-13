//@id=WLMCvZlFzD2y3B8X
//@name=Telepathic Speech
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Telepathic Speech`,
  description: `You know the Mindspeech language. Additionally, you can telepathically communicate with any creatures within distance of your Mind Spike ability if they share a language with you and you know of each other. When you communicate with someone this way, they can respond telepathically.`,
  source: `Class`,
});
