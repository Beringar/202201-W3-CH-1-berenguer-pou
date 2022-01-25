const getIndividualProperties = (character) => {
  const customProperties = Object.getOwnPropertyNames(character);
  const inheritedProperties = ["nombre", "familia", "edad", "vivo", "serie"];
  return customProperties.filter(
    (property) => !inheritedProperties.includes(property)
  );
};

export default getIndividualProperties;
