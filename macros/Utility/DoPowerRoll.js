//@id=lBfmIKZDFeOow27S
//@name=DoPowerRoll
//@img=icons/svg/dice-target.svg
try {
  const activeActor = await game.macros.getName(`ValidateParameter`).execute({ name: `activeActor`, value: scope.activeActor, type: `object` });
  const powerRollStat = await game.macros.getName(`ValidateParameter`).execute({ name: `powerRollStat`, value: scope.powerRollStat, type: `string`, nullable: true });
  const allowedEdgeBane = await game.macros.getName(`ValidateParameter`).execute({ name: `allowedEdgeBane`, value: scope.allowedEdgeBane, type: `object`, nullable: true });

  // Calculate the default modifier based on the highest allowed characteristic of the power roll
  let defaultValue = -1;
  if (powerRollStat) {
    await game.macros.getName("ValidateActorAttributes").execute({ activeActor });

    defaultValue = await game.macros.getName("GetHighestCharacteristic").execute({ activeActor, powerRollStat });
  }
  else
    // Manually check if the "characteristics" attribute is defined, as this is one of the few macros also used by the GM
    defaultValue = Object.hasOwn(activeActor.system.attributes, `characteristics`)
      ? await game.macros.getName("GetHighestCharacteristic").execute({ activeActor })
      : 2;

  // Show the modifier dialog
  modifier = await game.macros.getName(`ShowSimpleInputDialog`).execute({ label: `Modifier`, defaultValue });
  if (modifier === ``)
    modifier = 0;

  // Create the buttons and CSS for the edges and banes dialog
  function getEdgeBaneLabel(eb) {
    return eb === `db` ? `Double bane`
      : eb === `b` ? `Bane`
      : eb === `e` ? `Edge`
      : eb === `de` ? `Double edge`
      : `Normal roll`;
  }

  let ebButtons = {
    db: { label: getEdgeBaneLabel(`db`), color: `#8B0000` },
    b: { label: getEdgeBaneLabel(`b`), color: `#4D0000` },
    n: { label: getEdgeBaneLabel(`n`), color: `#000000` },
    e: { label: getEdgeBaneLabel(`e`), color: `#003300` },
    de: { label: getEdgeBaneLabel(`de`), color: `#006400` }
  };

  // Remove any buttons that aren't allowed
  if (allowedEdgeBane)
    for (const ebButtonCode in ebButtons)
      if (!allowedEdgeBane.includes(ebButtonCode))
        ebButtons[ebButtonCode].disabled = true;

  function getEdgeBaneButtonColor(button) {
    return button.disabled ? `var(--color-text-dark-secondary)` : button.color;
  }

  const ebButtonStyles = `
    <style>
      .dialog-buttons {
        white-space: nowrap;
      }
      button.db {
        color: ${getEdgeBaneButtonColor(ebButtons.db)};
      }
      button.b {
        color: ${getEdgeBaneButtonColor(ebButtons.b)};
      }
      button.n {
        color: ${getEdgeBaneButtonColor(ebButtons.n)};
      }
      button.e {
        color: ${getEdgeBaneButtonColor(ebButtons.e)};
      }
      button.de {
        color: ${getEdgeBaneButtonColor(ebButtons.de)};
      }
    </style>`

  // Show the edges and banes dialog
  const edgeBane = await Dialog.wait({
    title: `Edges & Banes`,
    buttons: ebButtons,
    content: ebButtonStyles,
    default: `n`
  });

  // Perform the roll and calculate the tier
  const plusTier = edgeBane === `de`;
  const minusTier = edgeBane === `db`;
  const edgeBaneModifier = edgeBane === `e` ? `+ 2`
    : edgeBane === `b` ? `- 2`
    : ``;

  const roll = await new Roll(`1d10 + 1d10 ${edgeBaneModifier} + ${modifier}`).evaluate();
  const isCrit = roll.dice[0].total + roll.dice[1].total > 18;

  let tier = roll.total < 12 ? 1
    : roll.total < 17 ? 2
    : 3;
  if (plusTier & tier < 3)
    tier++;
  if (minusTier & tier > 1)
    tier--;

  if (roll.dice[0].total + roll.dice[1].total === 20) // Always get a tier 3 result on roll of 20
    tier = 3;

  // Display the roll
  const flavorColor = tier === 1 ? `#800000`
    : tier === 2 ? `#000000`
    : `#008000`;
  await game.macros.getName(`ShareRoll`).execute({
    activeActor,
    roll,
    flavor: `<span style="color: ${flavorColor}; font-weight: bold;">${isCrit ? `Critical success! ` : ``}Tier ${tier} </span>[${getEdgeBaneLabel(edgeBane)}]`
  });

  return { tier: tier, edge: edgeBane };
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
  else
    throw error;
}
