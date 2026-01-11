//@id=0R43QFv9CMjKfgnN
//@name=Cryokinetic Mastery
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Cryokinetic Mastery",
  description: `<p>Whenever you use your Inertial Shield ability, you can then use the Grab maneuver as a free triggered action.</p>
    <p>Additionally, as your discipline grows, you strengthen the psionic power suffusing you, granting benefits from the Cryokinetic Mastery table. Benefits are cumulative except where an improved benefit replaces a lesser benefit.</p>
    <table>
      <tr>
        <th style="white-space: nowrap;">Discipline</th>
        <th style="white-space: nowrap;">Benefit</th>
      </tr>
      <tr>
        <td>2</td>
        <td>Whenever you use the Knockback maneuver, you can target one additional creature. Additionally, whenever you deal untyped damage with a psionic ability, you can change it to cold damage instead.</td>
      </tr>
      <tr>
        <td>4</td>
        <td>The first time on a turn that you grab a creature or an enemy moves 1 or more squares in the area of your Null Field ability, you gain 1 surge.</td>
      </tr>
      <tr>
        <td>6</td>
        <td>You gain an edge on the Grab and Knockback maneuvers.</td>
      </tr>
      <tr>
        <td>8 (4th level)</td>
        <td>The first time on a turn that you grab a creature or an enemy moves 1 or more squares in the area of your Null Field ability, you gain 2 surges.</td>
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
