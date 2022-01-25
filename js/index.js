import CharacterCardComponent from "./Components/CharacterCardComponent.js";
import getIndividualProperties from "./Utilities/getIndividualProperties.js";
import setPersonajes from "./personajes.js";

setPersonajes.forEach((character) => {
  const individualProperties = getIndividualProperties(character);
  // eslint-disable-next-line no-new
  new CharacterCardComponent(character, individualProperties);
});
