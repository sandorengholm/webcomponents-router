//Dummy Element
class RouteTwo extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        //Text
        const text = document.createElement('h1');
        text.innerHTML = 'Route 2';
        shadow.appendChild(text);
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

customElements.define("route-two", RouteTwo);