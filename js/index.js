import CharacterCardComponent from "./Components/CharacterCardComponent.js";
import setPersonajes from "./personajes.js";

setPersonajes.forEach((character) => {
  const renderCharacterCard = new CharacterCardComponent(character);
});
