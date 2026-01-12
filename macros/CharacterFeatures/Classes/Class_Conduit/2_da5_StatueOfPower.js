//@id=rmxvFwXo4JARQ0ga
//@name=Statue of Power
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Statue of Power`,
  resourceCost: 5,
  flavorText: `A marble statue of your deity rises from the earth.`,
  keywords: `Magic, Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Special`,
  effect: `A size 2 statue rises out of the ground in an unoccupied space within distance and lasts until the end of the encounter. While within 3 squares of the statue, you gain 1 surge at the start of each of your turns. Each ally within 3 squares of the statue gains this same benefit. The statue is destroyed if it takes 20 or more damage. It has immunity all to poison and psychic damage.`,
});
