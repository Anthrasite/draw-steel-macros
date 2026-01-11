//@id=entiu2rwNb9QCkoz
//@name=Burgeoning Saint
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Burgeoning Saint",
  description: `<p>You are infused with the power your deity reserves for their most worthy instruments. You have the following benefits:</p>
    <ul>
      <li>You gain an edge on Presence tests made to interact with other creatures.</li>
      <li>Whenever you deal damage to an enemy, you can spend a Recovery.</li>
      <li>You have corruption immunity 10 or holy immunity 10 (your choice).</li>
      <li>Your clothing and equipment changes in a way that reflects your status as your deity’s chosen champion, such as ordinary robes turning into gold vestments or a simple dagger becoming a wicked blade with intricate etching.</li>
    </ul>`,
  source: "Class"
});
