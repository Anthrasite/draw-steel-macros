//@id=kuFjOSJ0crINXa9H
//@name=Thrill Seeker
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Thrill Seeker",
  description: `You live for danger. Whether in battle or mundane peril, you can transcend your usual limits—and once you’ve tasted that excitement, you want more.</p>
    <p><b>Benefit:</b> Each time your party reaches 2, 4, and 6 Victories, you earn the party a hero token.</p>
    <p><b>Drawback:</b> At the start of a new game session, the party doesn’t earn a hero token for your character.</p>`,
  source: "Complication"
});

