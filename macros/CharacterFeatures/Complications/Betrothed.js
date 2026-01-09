//@id=cOro3zbfPRUS5qBJ
//@name=Betrothed
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Betrothed",
  description: `Your parents made a deal, and as part of that deal, you’re supposed to marry someone—or something—you didn’t choose. But no one is going to tell you what to do! They’ll all be sorry to find that you’ve run away to become a mighty adventurer.</p>
    <p><b>Benefit:</b> You escaped with a dowry present—a 1st-echelon trinket of your choice.</p>
    <p><b>Drawback:</b> All those who learn of you running out on your commitment think less of you and spread nasty rumors about you. Your Renown can’t ever be more than your level − 1.</p>`,
  source: "Complication"
});
