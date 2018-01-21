//Dummy Element
class PokemonComponent extends HTMLElement {
    constructor() {
        super();

        function createMarkup(data){
            return `
            <article class="pokemon">
                <h3>${data.name}</h3>
                <p>The Pokemon ${data.name} has a base experience of ${data.base_experience}, they also weigh ${data.weight}</p>
            </article>
            `;
        }
        //Text
        const data = {
            name: this.getAttribute("name"),
            base_experience: this.getAttribute("experience"),
            weight: this.getAttribute("weight")
        };
        this.innerHTML = createMarkup(data);
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

customElements.define("seb-pokemon", PokemonComponent);