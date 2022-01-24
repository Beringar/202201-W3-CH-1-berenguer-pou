import Component from "./Component.js";

class CharacterComponent extends Component {
  constructor(parentElement, className) {
    super(parentElement, className, "li");

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
    <h3>personaje item</h3>
    `;
  }
}

export default CharacterComponent;
