//@id=qv8fyKONSETlVCzW
//@name=Medium
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Medium",
  description: `<p>You can perceive ghosts and spirits that others don’t sense. These supernatural entities constantly whisper unsettling secrets in your mind—when they’re not trying to kill you.</p>
    <p><b>Benefit and Drawback:</b> Incorporeal undead within 10 squares of you can communicate telepathically with you. Additionally, you have the Contact Spirits ability.</p>`,
  source: "Complication"
});

