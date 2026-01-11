//@id=Iw7jWlE5gzpARD0T
//@name=Raden Growing Ferocity
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Raden Growing Ferocity",
  description: `<p>You gain certain benefits in combat based on the amount of ferocity you have. These benefits last until the end of your turn, even if a benefit would become unavailable to you because of the amount of ferocity you spend during your turn.</p>
    <p>As your ferocity grows, you gain benefits as noted on the Raden Growing Ferocity table. Benefits are cumulative except where an improved benefit replaces a lesser benefit.</p>
    <table>
      <tr>
        <th style="white-space: nowrap;">Aspect</th>
        <th style="white-space: nowrap;">Feature</th>
      </tr>
      <tr>
        <td>2</td>
        <td>Whenever you use the Disengage move action, the distance you can shift gains a bonus equal to your Agility score.</td>
      </tr>
      <tr>
        <td>4</td>
        <td>The first time you shift on a turn, you gain 1 surge.</td>
      </tr>
      <tr>
        <td>6</td>
        <td>You gain an edge on Agility tests, the Escape Grab maneuver, and the Knockback maneuver.</td>
      </tr>
      <tr>
        <td>8 (4th level)</td>
        <td>The first time you shift on a turn, you gain 2 surges instead of 1.</td>
      </tr>
      <tr>
        <td>10 (7th level)</td>
        <td>You have a double edge on Agility tests, the Escape Grab maneuver, and the Knockback maneuver.</td>
      </tr>
      <tr>
        <td>12 (10th level)</td>
        <td>Whenever you use a heroic ability, you gain 10 temporary Stamina. Additionally, the potency of any effects targeting you is reduced by 2 for you.</td>
      </tr>
    </table>`,
  source: "Class"
});
