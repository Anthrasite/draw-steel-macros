//@id=sXk6uf7Fn0AxhCjt
//@name=Ivory Tower
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Ivory Tower",
  description: `You studied in an academy or other educational institution. Your training was thorough and your reading list was wide-ranging. But when you left school, you discovered there were serious gaps in your education. Maybe some of those books were a little out of date.</p>
    <p><b>Benefit:</b> You have three skills of your choice, and you know one dead language of your choice.</p>
    <p><b>Drawback:</b> The Director chooses one of the skills you have from this complication. You lose that skill and can’t ever learn it again. Additionally, you take a bane on any test to which that skill would apply.</p>`,
  source: "Complication"
});

