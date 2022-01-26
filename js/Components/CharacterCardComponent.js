/* eslint-disable no-unused-vars */
import Personaje from "../Classes/Personaje.js";
import ButtonComponent from "./ButtonComponent.js";
// import getIndividualProperties from "../Utilities/getIndividualProperties.js";
import Asesor from "../Classes/Asesor.js";
import Luchador from "../Classes/Luchador.js";
import Rey from "../Classes/Rey.js";
import Escudero from "../Classes/Escudero.js";

class CharacterCardComponent {
  element;

  constructor(character, individualProperties) {
    this.element = document.createElement("li");
    this.element.className = "character col";
    document.querySelector(".characters-list").append(this.element);

    this.generateHTML(character);
    this.generateActionButtons(character);
    this.renderIndividualProperties(individualProperties, character);
    this.setLifeStatus(character);
    this.setCharacterType(character);
  }

  generateHTML(character) {
    this.element.innerHTML = `
        <div class="card character__card">
            <img src="img/${character.nombre.toLowerCase()}.jpg"
              alt="Cara del personaje"
              class="character__picture card-img-top"/>
            <div class="card-body">
              <h2 class="character__name card-title
              h4">${character.nombre} ${character.familia} </h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${character.edad} años</li>
                  <li>
                    Estado:
                    <i class="life-status fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                </ul>
                <div class="character__actions">
                </div>
              </div>
            </div>
            <i class="emoji-type-icon"></i>
        </div>`;
  }

  setLifeStatus(character) {
    const lifeStatusIconElement = this.element.querySelector(".life-status");
    if (character.vivo) {
      lifeStatusIconElement.classList.add("fa-thumbs-up");
      lifeStatusIconElement.classList.remove("fa-thumbs-down");
    } else {
      lifeStatusIconElement.classList.add("fa-thumbs-doww");
      lifeStatusIconElement.classList.remove("fa-thumbs-up");
    }
  }

  generateActionButtons(character) {
    const picture = this.element.querySelector(".character__picture");
    const buttonsWrapper = this.element.querySelector(".character__actions");
    const dieButton = new ButtonComponent(
      buttonsWrapper,
      "character__action btn",
      "muere",
      () => {
        picture.classList.add("character__picture--dead");
        character.muere();
      }
    );
    const hablaButton = new ButtonComponent(
      buttonsWrapper,
      "character__action btn",
      "habla",
      () => {
        const communicationsWrapper = document.querySelector(".comunications");
        const textDisplay = document.querySelector(".comunications__text");
        textDisplay.textContent = character.comunicar();
        const communicationsPicture = document.querySelector(
          ".comunications__picture"
        );
        communicationsPicture.src = `/img/${character.nombre.toLowerCase()}.jpg`;
        communicationsWrapper.classList.add("on");
        setTimeout(() => {
          communicationsWrapper.classList.remove("on");
        }, 2000);
      }
    );
  }

  renderIndividualProperties(individualProperties, character) {
    const ulListElement = this.element.querySelector(
      ".character__overlay .list-unstyled"
    );
    individualProperties.forEach((property) => {
      let label = property.label.replace("ny", "ñ").split(/(?<!^)(?=[A-Z])/);
      label = label.reduce((acc, word) => `${acc} ${word.toLowerCase()}`, "");
      const individualPropertyItem = document.createElement("li");
      individualPropertyItem.innerHTML = `<span class="list-unstyled__label">${label}:</span></span><span class="list-unstyled__value">${property.value}</span>`;
      ulListElement.appendChild(individualPropertyItem);
    });
  }

  setCharacterType(character) {
    const emojiTypeWrapper = this.element.querySelector(
      ".card.character__card"
    );

    const typeIcon = document.createElement("i");
    emojiTypeWrapper.append(typeIcon);
    if (character.constructor.name === "Asesor") typeIcon.textContent = "🎓";
    else if (character.constructor.name === "Luchador")
      typeIcon.textContent = "🗡";
    else if (character.constructor.name === "Rey") typeIcon.textContent = "👑";
    else if (character.constructor.name === "Escudero")
      typeIcon.textContent = "🛡";
  }
}

export default CharacterCardComponent;
