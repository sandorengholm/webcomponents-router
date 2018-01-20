//Dummy Element
class SebImage extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        //Styling
        const style = document.createElement('style');
        style.innerHTML = `
            :host {
                display: block;
                contain: content;
            }
            input {
                position: absolute;
                bottom: 0;
                display: block;
                height: 100%;
                width: 100%;
                border: none;
                font-size: 30px;
                box-sizing: border-box;
                background-color: transparent;
                color: white;
                text-align: center;
                font-family: "Lato", sans-serif;
                font-weight: 100;
            }
            input:focus {
                outline: none;
            }
            img {
                width: 100%;
            }
            .container {
                width: 100%;
                height: 200px;
                position: relative;
                overflow: hidden;
            }
            .overlay {
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
            }
        `;
        shadowRoot.appendChild(style);
        //Container
        const container = document.createElement('div');
        container.className = "container";
        shadowRoot.appendChild(container);
        //Overlay
        const overlay = document.createElement('div');
        overlay.className = "overlay";
        container.appendChild(overlay);
        //Input
        const input = document.createElement('input');
        input.type = "text";
        container.appendChild(input);
        //Image
        const img = document.createElement('img');
        img.src = 'http://lorempixel.com/400/200/';
        container.appendChild(img);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this._updateRendering();
    }
    connectedCallback() {
        this._updateRendering();
    }

    _updateRendering() {
        
    }
}

customElements.define("seb-image", SebImage);