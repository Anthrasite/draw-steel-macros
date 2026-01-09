//@id=8GB1PHCUab36VLtO
//@name=Consuming Interest
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Consuming Interest",
  description: `Ever since you were a kid, you’ve been obsessed with a certain topic. During your travels, you spend your free time gleaning all the information you can on that obsession. You might not be the world’s leading expert quite yet, but people should certainly trust your opinion on the topic.</p>
    <p><b>Benefit:</b> You have one skill of your choice from the lore skill group, and you can use the Study Lore project up to three times for that skill. Each time you use the project, you must use a different project source, and the project goal increases.</p>
    <p><b>Drawback:</b> You can’t imagine ever being wrong on the topic of your obsession. Whenever you make a test to recall lore using your chosen skill, the Director makes the test in secret. Instead of informing you whether you’re right or wrong, they provide you with correct information if you succeeded and false information if you failed.</p>`,
  source: "Complication"
});
