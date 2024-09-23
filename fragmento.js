class miComponente123 extends HTMLElement {   
    constructor() {
        super();
        this.innerHTML= <p>Challengers</p>;
    }
}

customElements.define('teamJulio', miComponente123);
