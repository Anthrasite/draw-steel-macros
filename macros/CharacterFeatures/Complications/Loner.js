//@id=FaVmuwU5Q39h2rcI
//@name=Loner
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Loner`,
  description: `<p>You’ve always been a lone wolf. With no one else to lean on, you’ve picked up a million survival tricks. Which made it all the more surprising when you joined your current adventuring group and found the family you’d never known you needed.</p>
    <p><b>Benefit:</b> When you finish a respite, choose a skill you don’t have. You have that skill until the end of your next respite.</p>
    <p><b>Drawback:</b> Now that you finally have people who care about you, you won’t let anyone take them away! Whenever a creature reduces one of your allies to 0 Stamina, you are taunted by that creature until your ally’s Stamina is higher than 0, another creature makes you taunted, or the end of the encounter.</p>`,
  source: `Complication`,
});

