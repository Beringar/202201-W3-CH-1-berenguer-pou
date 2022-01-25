import Luchador from "../Classes/Luchador.js";
import Asesor from "../Classes/Asesor.js";

const getIndividualProperties = (character) => {
  const customProperties = Object.getOwnPropertyNames(character);
  const inheritedProperties = ["nombre", "familia", "edad", "vivo", "serie"];
  return customProperties
    .filter((property) => !inheritedProperties.includes(property))
    .map((property) => {
      if (
        character[property] instanceof Luchador ||
        character[property] instanceof Asesor
      ) {
        return { label: property, value: character[property].nombre };
      }
      return { label: property, value: character[property] };
    });
};

export default getIndividualProperties;
