//Dummy Element
class RouteOne extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        //Text
        const text = document.createElement('h1');
        text.innerHTML = 'Route 1';
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

customElements.define("route-one", RouteOne);