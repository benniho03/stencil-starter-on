import { Component, Host, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'pop-footer',
  styleUrl: 'pop-footer.css',
  shadow: true,
})
export class PopFooter {
  @Prop() footerLinksJson: string;
  @Watch('footerLinksJson')

  handleFooterLinksJsonChanged(){
    this.convertFooterJson();
  }
  @State() footerlinks: Array <{name: string, href: string}> = [];
  componentWillLoad(){
    this.convertFooterJson();
  }
  convertFooterJson(){
    this.footerlinks = JSON.parse(this.footerLinksJson)
  }

  render() {
    return (
      <Host>
        
          <ul class="footerlinks">
            {this.footerlinks.map(footerlink =>(
              <li>
                <a href={footerlink.href}>{footerlink.name}</a>
              </li>
            ))}

          </ul>
        
      </Host>
    );
  }

}
