//@id=r26Y4UKC3suipny8
//@name=Owed a Favor
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Owed a Favor",
  description: `<p>The faction will perform one favor for the party, provided it doesn’t interfere with the faction’s goals.</p>
    <p>Additionally, the faction is a good source of information. The Director chooses a skill from the crafting or lore skill groups appropriate to the faction, such as the Criminal Underworld skill for an outlaw gang, the Blacksmithing skill for a blacksmith’s guild, or the Society skill for a noble house. While in a settlement where the faction has a presence, you gain this skill if you don’t already have it. If you already have the skill, you instead gain an edge on tests made using the skill.</p>`,
  source: "Title"
});
