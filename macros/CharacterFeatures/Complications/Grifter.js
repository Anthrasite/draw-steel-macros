//@id=Nz0RgPCr5jUJ1Vsn
//@name=Grifter
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Grifter",
  description: `<p>You used to be a con artist, but those days are pretty much behind you. Being a hero is an even better racket. After all, if you’re saving the world, who can be mad at you for stealing a few coins along the way?</p>
    <p><b>Benefit:</b> You have one skill of your choice from the intrigue skill group.</p>
    <p><b>Drawback:</b> Whenever you meet an NPC for the first time, the Director can decide that NPC was a victim of one of your previous cons and remembers you. If they do so, the party gains a hero token.</p>`,
  source: "Complication"
});

