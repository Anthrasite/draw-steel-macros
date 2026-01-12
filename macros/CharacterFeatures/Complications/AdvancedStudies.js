//@id=xoP7juHpy1lezs5m
//@name=Advanced Studies
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Advanced Studies`,
  description: `<p>You somehow obtained the notebook of a brilliant but eccentric member of your class. The knowledge held within those notes should help you unlock powerful new abilities—if you can ever figure out what the notes mean.</p>
    <p><b>Benefit and Drawback:</b> As a respite activity, you can study the notebook. Make a test using your highest characteristic score:</p>
    <table style="border: 0; background: rgba(0, 0, 0, 0);">
      <tbody>
        <tr style="background-color: rgba(0, 0, 0, 0);">
          <td style="white-space: nowrap; text-align: center; padding: 4px 0 0 0; vertical-align: top;">
            <div style="padding: 0 2px; border: 1px solid black; border-radius: 4px;">
              <p style="margin: 0;"><b>≤11</b></p>
            </div>
          </td>
          <td style="line-height: 1.3; padding: 4px 0 0 8px; width: 100%;">
            <p style="margin: 0;">You summon a hostile demon of your level or lower who attacks you at the end of the respite. The demon acts first in the combat, regardless of the traits or abilities of you or any other creature involved.</p>
          </td>
        </tr>
        <tr style="background-color: rgba(0, 0, 0, 0);">
          <td style="white-space: nowrap; text-align: center; padding: 4px 0 0 0; vertical-align: top; margin-right: 20px;">
            <div style="padding: 0 2px; border: 1px solid black; border-radius: 4px;">
              <p style="margin: 0;"><b>12-16</b></p>
            </div>
          </td>
          <td style="line-height: 1.3; padding: 4px 0 0 8px; width: 100%;">
            <p style="margin: 0;">You learn nothing and your time is wasted.</p>
          </td>
        </tr>
        <tr style="background-color: rgba(0, 0, 0, 0);">
          <td style="white-space: nowrap; text-align: center; padding: 4px 0 0 0; vertical-align: top;">
            <div style="padding: 0 2px; border: 1px solid black; border-radius: 4px;">
              <p style="margin: 0;"><b>17+</b></p>
            </div>
          </td>
          <td style="line-height: 1.3; padding: 4px 0 0 8px; width: 100%;">
            <p style="margin: 0;">You learn one bonus heroic ability from your class that you qualify for. You can use that ability until you finish your next respite.</p>
          </td>
        </tr>
      </tbody>
    </table>`,
  source: `Complication`,
});
