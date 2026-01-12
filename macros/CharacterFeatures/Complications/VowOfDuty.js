//@id=r9Fi7faxRXDcSjGd
//@name=Vow of Duty
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Vow of Duty`,
  description: `<p>You have sworn an oath to an organization. That organization is your rock, and as long as your faith in it remains unshaken, you are immovable.</p>
    <p><b>Benefit:</b> You gain a +1 bonus to stability.</p>
    <p><b>Drawback:</b> If you are ever forced to disobey your organization’s orders, your stability becomes 0 until your doubts are resolved or you find a new organization to pledge yourself to.</p>`,
  source: `Complication`,
});

