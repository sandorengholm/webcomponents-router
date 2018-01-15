class RouterLink extends HTMLElement {
    constructor() {
        super();
        //Router link
        this.routerlink = this.getAttribute('href');
        //Button text
        this.buttontext = this.innerHTML;

        const shadow = this.attachShadow({mode: 'open'});
        //Dummy styling
        const style = document.createElement('style');
        style.innerHTML = `
            button {
                height: 30px;
                padding: 0 20px;
                background-color: #f6f6f6;
                border: none;
                cursor: pointer;
                transition: background-color 0.5s ease;
            }
            button:hover {
                background-color: #eee;
            }
            button:focus {
                outline: none;
            }
        `;
        shadow.appendChild(style);

        //Router link button
        const button = document.createElement('button');
        button.innerHTML = this.buttontext;
        shadow.appendChild(button);

        //Button click
        button.addEventListener('click', ()=> {
            //Push history state
            history.pushState({},'', location.origin + this.routerlink);
            //Dispatch event for router outlet to pick up and handle a route switch
            window.dispatchEvent(new CustomEvent('routechange', {'detail': {'state':this.routerlink}}));
        });
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

customElements.define("router-link", RouterLink);