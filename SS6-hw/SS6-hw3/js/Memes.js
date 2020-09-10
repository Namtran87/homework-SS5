import { BaseComponent } from "./BaseComponent.js";
class Meme extends BaseComponent {
    constructor() {
        super();
        this.props = {
            "name": '',
            "image": '',
            "description": '',
            "date-modified": null
        };
    }
    static get observedAttributes() {
        return ['name', 'image', 'description', 'date-modified'];
    }

    render() {
        this._shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="./css/Meme.css">
        <div class="meme">
            <div id="name">${this.props["name"]}</div>
            <div><img id="image" src="${this.props["image"]}"></div>
            <div id="description">${this.props["description"]}</div>
            <div id="date-modified">${this.props["date-modified"]}</div>
        </div>`;

    }
}
window.customElements.define('meme-container', Meme);