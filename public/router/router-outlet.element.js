class RouterOutlet extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});

        //Listen for route changes
        window.addEventListener('routechange', (e) => {
            this.currentroute = e.detail.state;
            this._updateRendering();
        });
        //When states get popped from the stack
        window.onpopstate = () => {
            this.getCurrentRoute();
            this._updateRendering();
        };
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this._updateRendering();
    }

    connectedCallback() {
        this.getCurrentRoute();
        //Route-to-Element hook up
        this.routes = {
            '/'         : 'route-one',
            '/route1'   : 'route-one',
            '/route2'   : 'route-two',
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

    getCurrentRoute() {
        this.currentroute = location.pathname;
    }
}

customElements.define("router-outlet", RouterOutlet);