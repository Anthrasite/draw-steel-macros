//@id=ZFl86qOpSnkeurAM
//@name=War of Assassins
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "War of Assassins",
  description: `<p>Being in the wrong place at the wrong time saw you caught in the middle of a conflict between two warring assassins’ guilds. Whether by choice or by accident, you wound up helping one faction at the expense of the other.</p>
    <p><b>Benefit:</b> Having gained the favor of the faction you helped, you can call on its members three times for favors. If a favor is reasonable and within the faction’s power to grant, its members do it, no questions asked.</p>
    <p><b>Drawback:</b> The faction you wronged hates you, and its members would love to see you pay for your transgression.</p>`,
  source: "Complication"
});

