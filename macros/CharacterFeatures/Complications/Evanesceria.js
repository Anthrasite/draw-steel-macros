//@id=AEu0L4i6XyF1OZfc
//@name=Evanesceria
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Evanesceria",
  description: `You have contracted a rare magical disease called evanesceria. From time to time, you’re not quite yourself—or anyone else either. You simply … vanish, then return later with no memory of your absence.</p>
    <p><b>Benefit:</b> At the start of any combat round, you can attempt to absent yourself from reality by rolling a d10. On a 6 or higher, you disappear, then reappear in the space you left or the nearest unoccupied space of your choice when you take your turn. You can’t attempt to absent yourself again until you earn 1 or more Victories.</p>
    <p><b>Drawback:</b> Whenever you start a respite activity, roll 2d10. If you roll a 1 on either die, you inadvertently absent yourself from reality, reappearing at the end of the respite. You gain the benefits of taking a respite but don’t perform the respite activity.</p>`,
  source: "Complication"
});

