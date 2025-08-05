//@id=WSUFdx8b7yBgzPs6
//@name=Hawk Rider
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Hawk Rider",
  description: `You travel with a giant hawk who you stole from the Hawklords. You might once have been a Hawklord yourself, or perhaps you escaped their captivity. Having a giant hawk companion comes with its share of inconveniences and dangers, but those are a small price to pay for the freedom of the open sky.</p>
    <p><b>Benefit:</b> As long as you are not in a building or other structure, you can spend 1 uninterrupted minute to summon your giant hawk, which acts as your mount. You can dismiss the hawk at any time (no action required). The hawk won’t go inside buildings, dungeons, or other structures, and it won’t accept anyone but you as a rider. If the hawk takes damage or dies, you can restore them to full Stamina as a respite activity.</p>
    <p><b>Drawback:</b> People aware of the origin of your mount are afraid to interact with you, since they worry the Hawklords will come after them by association. You take a bane on any test made to influence anyone who knows of the Hawklords and who has observed you with your giant hawk. Such people might also report you to the Hawklords, who come looking for you at the Director’s discretion.</p>`,
  source: "Complication"
});
