import { Component, Host, h, getAssetPath } from '@stencil/core';
const popUpLogo = getAssetPath("/assets/pop-up-logo.png")

@Component({
  tag: 'pop-introduction',
  styleUrl: 'pop-introduction.css',
  shadow: true,
})
export class PopIntroduction {

  render() {
    return (
      <Host>
        <div class="frame">
        <img class="popUpLogo" src={popUpLogo}/>
        <pop-heading heading="PopUp - das ultimative Minispiel"></pop-heading>
        <p>Pop Up ist ein Spiel im Entwicklungsstatus, das während eines Theoriesemesters im Studiengang Onlinemedien von Jessica Günther, Oliver Ebert, Paul Henn, Florian Uhlschmied und Benjamin Holderle erstellt wird. Hierfür wird die Gameengine Unity verwendet.</p>
        </div>
      </Host>
    );
  }

}
