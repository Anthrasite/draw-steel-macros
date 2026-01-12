//@id=h3QpjAwvVR9ekWBi
//@name=Stripped of Rank
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Stripped of Rank`,
  description: `<p>You were trained as an officer, but you no longer serve. Whether you fled from a battle, were dishonorably discharged, or defected from an evil army, you make your own way in the world now—though your military training will never truly leave you.</p>
    <p><b>Benefit:</b> You have the Issue Order ability.</p>
    <p><b>Drawback:</b> Rather than attracting followers at 3, 6, 9, and 12 Renown, you can attract followers only when your Renown reaches 4, 8, 12, and 16.</p>`,
  source: `Complication`,
});
