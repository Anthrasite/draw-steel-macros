//@id=VyItn5AJK6NT3REj
//@name=Runaway
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Runaway",
  description: `<p>To your embarrassment, no sinister omens attended your birth and your closet contains no skeletons. You’re just an ordinary person raised in a hardworking family. You’re expected to carry on the family business—but who can settle down to a boring job when adventure calls! That’s why you ran away.</p>
    <p><b>Benefit:</b> You have one skill of your choice from the crafting skill group.</p>
    <p><b>Drawback:</b> Members of your extended family are looking for you, intending to drag you home—and you’ve never been able to stand up to them.</p>`,
  source: "Complication"
});

