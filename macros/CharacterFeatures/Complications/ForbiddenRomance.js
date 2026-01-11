//@id=RhoiO5ANDzVBdvga
//@name=Forbidden Romance
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Forbidden Romance",
  description: `<p>You are in love with someone powerful, but tragic circumstances mean you cannot be with them. Whether your lover is from a feuding family, betrothed to another, or has been driven from your side, you are fated to always be apart.</p>
    <p><b>Benefit:</b> You can secretly call on your betrothed for favors. Though they support you from afar, they might be constrained in how much aid they provide—and they can’t openly reveal their connection with you.</p>
    <p><b>Drawback:</b> When your lover is in trouble, they might call on you for help. But if your relationship is discovered, the circumstances that keep you apart will be made worse.</p>`,
  source: "Complication"
});

