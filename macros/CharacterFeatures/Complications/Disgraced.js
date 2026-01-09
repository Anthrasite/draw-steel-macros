//@id=s2BwejroUPGmz96p
//@name=Disgraced
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Disgraced",
  description: `You’re a disgraced member of a powerful family or guild, having been turned out by your relatives or peers. Those you were once close to won’t give you the time of day anymore, much less lend a helping hand, until you clear your name or clean up your act.</p>
    <p><b>Benefit:</b> You earn 1 Renown, and you have one skill of your choice from the interpersonal or intrigue skill group.</p>
    <p><b>Drawback:</b> Anyone who has heard of you and is influenced by your Renown treats you as infamous. Whenever you are part of a negotiation with an NPC who has an interest of 2 or lower, that NPC makes a plan to hurt you personally after the negotiation ends—and carries that plan out.</p>`,
  source: "Complication"
});
