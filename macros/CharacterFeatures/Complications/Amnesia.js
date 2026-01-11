//@id=MvhuDtaROlJ9bBqK
//@name=Amnesia
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Amnesia",
  description: `<p>You have no memory of your past before the … incident. Hopefully, you’ll regain your memory soon and find out what the incident was. In the meantime, you need friends so you won’t be alone when your past catches up to you.</p>
    <p><b>Benefit:</b> You have a supernatural possession—a 1st-echelon trinket of your choice that might have some connection with your former life.</p>
    <p><b>Drawback:</b> You take a bane on any test made to recall lore.</p>`,
  source: "Complication"
});
