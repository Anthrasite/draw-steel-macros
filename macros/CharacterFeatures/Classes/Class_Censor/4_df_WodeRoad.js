//@id=azM0LjQZrUbkvtAw
//@name=Wode Road
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Wode Road",
  description: `As a main action, you touch a living tree and make it part of a divine transportation network. You can maintain a number of trees in your network equal to your Presence score. Whenever you touch any tree in your network, you can use a main action to teleport yourself and any willing creatures within 10 squares of you to a tree in your network on the same world. If a tree in your network dies, it is no longer part of the network. You can remove a tree from your network no matter your distance from it, including across different worlds (no action required).`,
  source: "Class"
});
