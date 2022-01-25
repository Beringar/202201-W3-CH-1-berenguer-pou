class CharacterCardComponent {
  element;

  constructor(character) {
    this.element = document.createElement("li");
    this.element.className = "character col";
    document.querySelector(".characters-list").append(this.element);

    this.generatreHTML(character);
  }

  generatreHTML(personaje) {
    this.element.innerHTML = `
        <div class="card character__card">
            <img src="img/${personaje.nombre.toLowerCase()}.jpg"
              alt="Cara del personaje"
              class="character__picture card-img-top"/>
            <div class="card-body">
              <h2 class="character__name card-title
              h4">${personaje.nombre} ${personaje.familia} </h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${personaje.edad} años</li>
                  <li>
                    Estado:
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
        </div>`;
  }
}
export default CharacterCardComponent;
