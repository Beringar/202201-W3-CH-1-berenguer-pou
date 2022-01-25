import CharacterCardComponent from "./Components/CharacterCardComponent.js";
import getIndividualProperties from "./Utilities/getIndividualProperties.js";
import setPersonajes from "./personajes.js";

setPersonajes.forEach((character) => {
  const individualProperties = getIndividualProperties(character);
  const renderCharacterCard = new CharacterCardComponent(
    character,
    individualProperties
  );
});
