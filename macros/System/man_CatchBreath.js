//@id=ZxNWv3FI1zJXPM7Q
//@name=Catch Breath
//@img=icons/magic/air/air-smoke-casting.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Catch Breath",
  type: "Maneuver",
  description: `<p>A creature who uses the Catch Breath maneuver spends a Recovery and regains Stamina equal to their recovery value.</p>
    <p>A creature who is dying can’t use the Catch Breath maneuver, but other creatures can help them spend Recoveries in other ways.</p>`
});
