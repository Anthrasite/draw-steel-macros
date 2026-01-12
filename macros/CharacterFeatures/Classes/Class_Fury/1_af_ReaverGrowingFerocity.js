//@id=4DcJ1ICatwOHYn0X
//@name=Reaver Growing Ferocity
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Reaver Growing Ferocity`,
  description: `<p>You gain certain benefits in combat based on the amount of ferocity you have. These benefits last until the end of your turn, even if a benefit would become unavailable to you because of the amount of ferocity you spend during your turn.</p>
    <p>As your ferocity grows, you gain benefits as noted on the Reaver Growing Ferocity table. Benefits are cumulative except where an improved benefit replaces a lesser benefit.</p>
    <table>
      <tr>
        <th style="white-space: nowrap;">Ferocity</th>
        <th style="white-space: nowrap;">Benefit</th>
      </tr>
      <tr>
        <td>2</td>
        <td>Whenever you use the Knockback maneuver, the forced movement distance gains a bonus equal to your Agility score.</td>
      </tr>
      <tr>
        <td>4</td>
        <td>The first time you slide a creature on a turn, you gain 1 surge.</td>
      </tr>
      <tr>
        <td>6</td>
        <td>You gain an edge on Agility tests and the Knockback maneuver.</td>
      </tr>
      <tr>
        <td>8 (4th level)</td>
        <td>The first time you slide a creature on a turn, you gain 2 surges.</td>
      </tr>
      <tr>
        <td>10 (7th level)</td>
        <td>You have a double edge on Agility tests and the Knockback maneuver.</td>
      </tr>
      <tr>
        <td>12 (10th level)</td>
        <td>Whenever you use a heroic ability, you gain 10 temporary Stamina. Additionally, whenever you make a power roll that imposes forced movement on a target, the forced movement distance gains a bonus equal to your Agility score.</td>
      </tr>
    </table>`,
  source: `Class`,
});
