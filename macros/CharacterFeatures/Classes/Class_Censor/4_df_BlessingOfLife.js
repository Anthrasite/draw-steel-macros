//@id=hdRsOiXF6YTn0qP4
//@name=Blessing of Life
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Blessing of Life",
  description: "Your divine presence causes those you deem worthy to recover quickly from a fight. Whenever an ally within distance of your My Life for Yours ability regains Stamina, they regain additional Stamina equal to your Presence score.",
  source: "Class"
});
