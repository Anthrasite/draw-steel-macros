//@id=zmVdjT1acJwDQZ2p
//@name=Ward
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Ward`,
  description: `<p>Your childhood sweetheart was royalty, and the two of you stayed close throughout the years. When your former sweetheart died, you swore an oath to dedicate your life to become a role model for their child, advising them in the ways of being a benevolent monarch.</p>
    <p><b>Benefit:</b> You know how to talk to monarchs, aristocrats, and other wealthy leaders. When you engage with any such NPC during a negotiation, their patience increases by 1 (to a maximum of 5).</p>
    <p><b>Drawback:</b> Your royal ward can be a burden. Whenever you take a respite, roll a d10. On a 1, your ward contacts you and requires your help during the respite, requiring you to spend your time helping them instead of undertaking a respite activity.</p>`,
  source: `Complication`,
});

