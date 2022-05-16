import { Component, Host, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'pop-header',
  styleUrl: 'pop-header.css',
  shadow: true,
})
export class PopHeader {
  @Prop() navLinksJson: string;
  @Watch('navLinksJson')

  handleNavLinksJsonChanged(){
    this.convertNavJson();
  }
  @State() navlinks: Array <{name: string, href: string}> = [];

  componentWillLoad(){
    this.convertNavJson();
  }
  convertNavJson(){
    this.navlinks = JSON.parse(this.navLinksJson)
  }

  render() {
    return (
      <Host>
        <nav>
          <ul class="headerlinks">
            {this.navlinks.map(navlink =>(
              <li>
                <a href={navlink.href}>{navlink.name}</a>
              </li>
            ))}

          </ul>
        </nav>
        
      </Host>
    );
  }

}
