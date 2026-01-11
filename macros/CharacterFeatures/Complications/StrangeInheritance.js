//@id=uiXsNCByLbZHmF3G
//@name=Strange Inheritance
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Strange Inheritance",
  description: `<p>Your siblings each inherited money or land, but you received a strange, seemingly useless trinket—along with the advice that maybe you weren’t cut out for an ordinary, peaceful life.</p>
    <p><b>Benefit:</b> You have a somewhat inoperative 2nd-echelon trinket of the Director’s choice. This trinket functions only while the total of your level plus your Victories is 5 or higher. You don’t learn what the trinket’s powers are until the first time it becomes operative.</p>
    <p><b>Drawback:</b> With no other inheritance, you accumulated debts. The first time your Wealth exceeds 1, you lose 1 Wealth.</p>`,
  source: "Complication"
});

