//@id=9SJnse8LbP57DpUI
//@name=Zeitgeist
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Zeitgeist`,
  description: `<p>You always have your ear to the ground, your finger on the pulse. When you start or finish a respite, choose one of the following effects:</p>
    <ul>
      <li>You can ask the Director for two clues regarding an upcoming encounter or negotiation. One of the clues can be false.</li>
      <li>
        <p>By bragging, intimidating, leading, or lying, you attempt to spread one piece of information into the local area. Make a Presence test:</p>
        <table style="border: 0; background: rgba(0, 0, 0, 0);">
          <tbody>
            <tr style="background-color: rgba(0, 0, 0, 0);">
              <td style="white-space: nowrap; text-align: center; padding: 4px 0 0 0; vertical-align: top;">
                <div style="padding: 0 2px; border: 1px solid black; border-radius: 4px;">
                  <p style="margin: 0;"><b>≤11</b></p>
                </div>
              </td>
              <td style="line-height: 1.3; padding: 4px 0 0 8px; width: 100%;">
                <p style="margin: 0;">Your information reaches no one.</p>
              </td>
            </tr>
            <tr style="background-color: rgba(0, 0, 0, 0);">
              <td style="white-space: nowrap; text-align: center; padding: 4px 0 0 0; vertical-align: top; margin-right: 20px;">
                <div style="padding: 0 2px; border: 1px solid black; border-radius: 4px;">
                  <p style="margin: 0;"><b>12-16</b></p>
                </div>
              </td>
              <td style="line-height: 1.3; padding: 4px 0 0 8px; width: 100%;">
                <p style="margin: 0;">Your information reaches the nearest populated area of town size or larger. You and each ally present when you make the test gain an edge on Presence tests in that area until one of you spends a Recovery.</p>
              </td>
            </tr>
            <tr style="background-color: rgba(0, 0, 0, 0);">
              <td style="white-space: nowrap; text-align: center; padding: 4px 0 0 0; vertical-align: top;">
                <div style="padding: 0 2px; border: 1px solid black; border-radius: 4px;">
                  <p style="margin: 0;"><b>17+</b></p>
                </div>
              </td>
              <td style="line-height: 1.3; padding: 4px 0 0 8px; width: 100%;">
                <p style="margin: 0;">Your information reaches the nearest populated area of town size or larger, plus the next closest such population. You and allies present for your test gain an edge on Presence tests made in those areas until you start your next respite.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </li>
      <li>You can ask the Director for three rumors regarding the area you’re in or an area you plan on entering before your next respite. One of the rumors can be false.</li>
    </ul>`,
  source: `Class`,
});
