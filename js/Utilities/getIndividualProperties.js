import Luchador from "../Classes/Luchador.js";
import Asesor from "../Classes/Asesor.js";

const getIndividualProperties = (character) => {
  const customProperties = Object.getOwnPropertyNames(character);
  const inheritedProperties = ["nombre", "familia", "edad", "vivo", "serie"];
  return customProperties
    .filter((property) => !inheritedProperties.includes(property))
    .map((property) => {
      if (property instanceof Luchador || property instanceof Asesor) {
        return { label: property, value: character[property].nombre };
      }
      return { label: property, value: character[property] };
    });
};

export default getIndividualProperties;
