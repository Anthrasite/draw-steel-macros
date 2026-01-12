//@id=8o7wviHZ9JXcQ51P
//@name=Instant Action
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Instant Action`,
  description: `If you’re not surprised at the start of your first turn in combat, you gain an edge on ability rolls and gain 2 surges. If you are surprised, you can spend 3 discipline to no longer be surprised and gain the benefits of this feature.`,
  source: `Class`,
  onUseFunc: async function() {
    const surprised = await Dialog.confirm({
      title: `Surprised?`,
      content: `<p>Are you surprised?</p>`
    });

    let gainSurges = !surprised;

    if (surprised) {
      const currResource = await game.macros.getName(`GetAttribute`).execute({ activeActor: actor, attributeName: `resource` });
      if (currResource.value < 3) {
        ui.notifications.info(`Not enough ${currResource.label}!`);
        return
      }

      const spendDiscipline = await Dialog.confirm({
        title: `Spend discipline?`,
        content: `<p>Spend 3 discipline to no longer be surprised, gain an edge on ability rolls, and gain 2 surges?</p>`
      });

      if (spendDiscipline)
        await game.macros.getName(`UpdateAttribute`).execute({ activeActor: actor, attributeName: `resource`, value: -3, isDelta: true });
      gainSurges = spendDiscipline;
    }

    if (gainSurges)
      await game.macros.getName(`UpdateAttribute`).execute({ activeActor: actor, attributeName: `surges`, value: 2, isDelta: true });
  },
});
