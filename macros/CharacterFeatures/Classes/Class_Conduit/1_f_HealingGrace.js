//@id=YPV7bfLFcRyq6GW0
//@name=Healing Grace
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Healing Grace",
  flavorText: "Your divine energy restores the righteous.",
  keywords: "Magic, Ranged",
  type: "Maneuver",
  distance: "Ranged 10",
  target: "Self or one ally",
  effect: "The target can spend a Recovery.",
  extraResourceCost: "1+",
  extraResourceEffect: `For each piety spent, choose one of the following enhancements:</p>
    <ul>
      <li>You can target one additional ally within distance.</li>
      <li>You can end one effect on a target that is ended by a saving throw or that ends at the end of their turn.</li>
      <li>A prone target can stand up.</li>
      <li>A target can spend 1 additional Recovery.</li>
    </ul>`
});
