import Rey from "./Classes/Rey.js";
import Luchador from "./Classes/Luchador.js";
import Asesor from "./Classes/Asesor.js";
import Escudero from "./Classes/Escudero.js";

const setPersonajes = [];

const joffrey = new Rey("Joffrey", "Baratheon", 16, 2);
const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", 7);
const daenerys = new Luchador("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
const bronn = new Escudero("Bronn", "AguasNegras", 54, 0, jaime);

setPersonajes.push(joffrey, jaime, daenerys, tyrion, bronn);

export default setPersonajes;
