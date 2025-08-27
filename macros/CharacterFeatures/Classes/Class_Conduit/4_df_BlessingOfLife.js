//@id=7oXugnSRtpFBscmQ
//@name=Blessing of Life
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Blessing of Life",
  description: "Your divine presence causes those you deem worthy to recover quickly from a fight. Whenever an ally within distance of your Healing Grace ability regains Stamina, they regain additional Stamina equal to your Intuition score.",
  source: "Class"
});
