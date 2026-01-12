//@id=I10TiphKRQPySacl
//@name=Dramatic Monologue
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Dramatic Monologue",
  flavorText: "It doesn’t need to make sense. Just say it with emotion.",
  keywords: "Magic, Ranged",
  type: "Maneuver",
  distance: "Ranged 10",
  target: "Special",
  effect: `<p>Choose one of the following effects:</p>
    <ul>
      <li>You orate a rousing tale of victory. One ally within distance gains an edge on the next power roll they make before the start of your next turn.</li>
      <li>You weave a tale of high-stakes heroics. One ally within distance gains 1 surge.</li>
      <li>You insult a foe where they’re most vulnerable. One enemy within distance takes a bane on the next power roll they make before the end of their next turn.</li>
    </ul>`,
  extraResourceCost: "1",
  extraResourceEffect: "You can choose two targets for the chosen effect."
});
