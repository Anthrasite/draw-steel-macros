//@id=utfQlz25ZV6Jnk8h
//@name=Shared Spirit
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Shared Spirit",
  description: `<p>A supernatural spirit occupies your body, with each of you controlling your body by turns. You and the spirit share the same short-term goals and work equally well with your companions, though you might have different personalities, mannerisms, and long-term goals.</p>
    <p><b>Benefit and Drawback:</b> At the start of each day, roll a d6. On a 1–4, you control your body. On a 5–6, the spirit does. Alternatively, if you and the spirit are on good terms, you can choose each day who is in control. Choose three of your skills. You can use those skills only while you are in control of your body. Then choose three new skills, which you have and can use only while your spirit is in control.</p>`,
  source: "Complication"
});

