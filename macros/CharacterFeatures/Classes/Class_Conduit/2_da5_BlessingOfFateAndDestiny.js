//@id=GtE1cCyLYRMIxSX9
//@name=Blessing of Fate and Destiny
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Blessing of Fate and Destiny",
  resourceCost: 5,
  flavorText: "Your enemies suffer their fate; your allies embrace their destiny!",
  keywords: "Magic, Ranged",
  type: "Main action",
  distance: "Ranged 10",
  target: "Three creatures",
  effect: `<p>You can target yourself instead of one creature with this ability. Choose one of the following effects, which lasts until the end of the encounter or until you are dying:</p>
    <ul>
      <li>Whenever a target makes a power roll, they can roll three dice and choose which two rolls to use.</li>
      <li>Whenever a target makes a power roll, they must roll three dice and use the lowest two rolls.</li>
    </ul>`
});
