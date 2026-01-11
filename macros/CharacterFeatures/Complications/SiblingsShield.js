//@id=l68u4DxbT7aINwAV
//@name=Sibling’s Shield
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Sibling’s Shield",
  description: `<p>You were tasked with delivering a ceremonial shield to your older sibling, a celebrated warrior, for their years of service. When you arrived at their homestead, you found them dead on their doorstep with their own sword lodged in their back. To find out who did this to them—and why—you decided to step into their shoes. It will take a while to match up to your sibling’s legacy, though.</p>
    <p><b>Benefit:</b> While you wear your sibling’s shield on your back, you can’t be flanked.</p>
    <p><b>Drawback:</b> Visions of your dead sibling haunt you at night. Whenever you take a respite, make an Intuition test that can’t make use of any skill. On a tier 1 or tier 2 outcome, you regain 1 fewer Recoveries than usual when you finish the respite.</p>`,
  source: "Complication"
});

