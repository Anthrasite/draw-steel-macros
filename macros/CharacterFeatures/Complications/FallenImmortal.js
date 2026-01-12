//@id=Iyr8NU2ijcwDmxq7
//@name=Fallen Immortal
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Fallen Immortal`,
  description: `<p>You used to be an immortal creature, dispensing justice and doing the bidding of the gods. Now, whether as punishment or reward, you have been ordered to set your true nature aside and become a mortal. Your remaining years will be short, but living alongside your fellow mortals gives your life new meaning.</p>
    <p><b>Benefit:</b> You have the Religion skill (from the lore skill group). Additionally, whenever you use an ability that deals untyped damage, that ability can deal holy damage instead.</p>
    <p><b>Drawback:</b> You will never fully gain a mortal’s comfort with untruth. Any test you make to deceive another creature takes a bane.</p>`,
  source: `Complication`,
});

