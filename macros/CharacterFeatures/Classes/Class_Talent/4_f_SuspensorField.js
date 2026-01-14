//@id=pbLPyErJiX3c8fBH
//@name=Suspensor Field
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Suspensor Field`,
  description: `<p>You can fly. While flying, your stability is reduced to 0 and can’t be increased. If you can already fly, you have a +2 bonus to speed while flying instead.</p>
    <p>If you are strained while flying and are force moved, the forced movement distance gains a +2 bonus.</p>`,
  source: `Class`,
});
