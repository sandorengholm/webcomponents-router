class RouterOutlet extends HTMLElement {
    constructor() {
        super();
        var _this = this;
        this.shadow = this.attachShadow({mode: 'open'});

        //Listen for route changes
        window.addEventListener('routechange', (e) => {
            this.currentroute = e.detail.state;
            this._updateRendering();
        });
        //When states get popped from the stack
        window.onpopstate = () => {
            this.currentroute = location.pathname.length > 1 ? location.pathname : '/route1';
            this._updateRendering();
        };
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this._updateRendering();
    }

    connectedCallback() {
        //Get Current Route
        this.currentroute = location.pathname.length > 1 ? location.pathname : '/route1';
        //Route to Element hook up
        this.routes = {
            '/route1': 'route-one',
            '/route2': 'route-two',
            '/imagetest': 'seb-image'
        };
        this._updateRendering();
    }

    //Fires on load and routechange
    _updateRendering() {
        //Create element from route
        var element = document.createElement(this.routes[this.currentroute]);
        //Empty shadow
        while (this.shadow.firstChild) {
            this.shadow.removeChild(this.shadow.firstChild);
        }
        //Append element to shadow
        this.shadow.appendChild(element);
    }
}

customElements.define("router-outlet", RouterOutlet);