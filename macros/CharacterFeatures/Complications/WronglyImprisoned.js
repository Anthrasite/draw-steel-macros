//@id=87REiYbudMznmfrt
//@name=Wrongly Imprisoned
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Wrongly Imprisoned",
  description: `You spent many years imprisoned for a crime you didn’t commit. During your long hours of solitary confinement, you honed your skills and recited the names of those who framed you. Someday, you will have your revenge.</p>
    <p><b>Benefit:</b> You have two skills of your choice, neither of which can be from the interpersonal skill group.</p>
    <p><b>Drawback:</b> Your health suffered in prison. Whenever you are winded, you are stricken with a hacking cough that makes it impossible for you to hide or sneak.</p>`,
  source: "Complication"
});

