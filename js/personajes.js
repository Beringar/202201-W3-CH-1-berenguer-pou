import CharacterComponent from "./Components/CharacterComponent.js";

const characterList = document.createElement("ul");

characterList.className = "characters-list row list-unstyled";

const personajeTEST = new CharacterComponent(characterList, "character col");
const personajeTEST1 = new CharacterComponent(characterList, "character col");
const personajeTEST2 = new CharacterComponent(characterList, "character col");
const personajeTEST3 = new CharacterComponent(characterList, "character col");
const personajeTEST4 = new CharacterComponent(characterList, "character col");
const personajeTEST5 = new CharacterComponent(characterList, "character col");

export default characterList;
