//@id=feb3I8m5aWSPLJZA
//@name=Remember Your Oath
//@img=modules/draw-steel-macros/icons/ancestry/dragon-knight.png
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Remember Your Oath",
  description: `As a maneuver, you can recite the following oath. Until the start of your next turn, whenever you make a saving throw, you succeed on a 4 or higher.</p>
    <p><em>Even should the sun stop in the sky<br>
    Even should the night last a thousand years<br>
    I will stand forever<br>
    I shall not yield<br>
    Those who suffer and yearn for justice<br>
    I am your sword and shield<br>
    I will yield no ground<br>
    I will speak no lies<br>
    I will stand against all tyrants<br>
    Until the last villain dies</em></p>`,
  source: "Ancestry"
});
