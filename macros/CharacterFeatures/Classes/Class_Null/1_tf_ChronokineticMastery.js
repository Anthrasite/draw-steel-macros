//@id=nEwfPhkAt2XoDLYs
//@name=Chronokinetic Mastery
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Chronokinetic Mastery",
  description: `<p>As you advance in your chosen null tradition, you gain certain benefits in combat, including benefits based on the amount of discipline you have. Benefits based on how much discipline you have last until the end of your turn, even if a benefit would become unavailable to you because of the amount of discipline you spend during your turn.</p>
    <p>Whenever you use the Inertial Shield ability, you can use the Disengage move action as a free triggered action.</p>
    <p>Additionally, as your discipline grows, your psionic mastery of your body intensifies, granting benefits from the Chronokinetic Mastery table. Benefits are cumulative except where an improved benefit replaces a lesser benefit.</p>
    <table>
      <tr>
        <th style="white-space: nowrap;">Discipline</th>
        <th style="white-space: nowrap;">Benefit</th>
      </tr>
      <tr>
        <td>2</td>
        <td>Whenever you use the Knockback maneuver, you can use the Disengage move action as a free triggered action either before or after the maneuver.</td>
      </tr>
      <tr>
        <td>4</td>
        <td>The first time on a turn that you willingly move 1 or more squares as part of an ability, you gain 1 surge.</td>
      </tr>
      <tr>
        <td>6</td>
        <td>You gain an edge on the Grab and Knockback maneuvers.</td>
      </tr>
      <tr>
        <td>8 (4th level)</td>
        <td>The first time on a turn that you willingly move 1 or more squares as part of an ability, you gain 2 surges.</td>
      </tr>
      <tr>
        <td>10 (7th level)</td>
        <td>You have a double edge on the Grab and Knockback maneuvers.</td>
      </tr>
      <tr>
        <td>12 (10th level)</td>
        <td>Whenever you force move a target, the forced movement distance gains a bonus equal to your Intuition score. Additionally, whenever you use a heroic ability, you gain 10 temporary Stamina.</td>
      </tr>
    </table>`,
  source: "Class"
});
