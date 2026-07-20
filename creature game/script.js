  const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const weightEl = document.getElementById("weight");
const heightEl = document.getElementById("height");
const typesEl = document.getElementById("types");

const hpEl = document.getElementById("hp");
const attackEl = document.getElementById("attack");
const defenseEl = document.getElementById("defense");
const specialAttackEl = document.getElementById("special-attack");
const specialDefenseEl = document.getElementById("special-defense");
const speedEl = document.getElementById("speed");

const API_URL = "https://rpg-creature-api.freecodecamp.rocks/api/creature/";

const clearUI = () => {
  creatureName.textContent = "";
  creatureId.textContent = "";
  weightEl.textContent = "";
  heightEl.textContent = "";
  typesEl.innerHTML = "";

  hpEl.textContent = "";
  attackEl.textContent = "";
  defenseEl.textContent = "";
  specialAttackEl.textContent = "";
  specialDefenseEl.textContent = "";
  speedEl.textContent = "";
};

const displayCreature = (data) => {
  creatureName.textContent = data.name.toUpperCase();
  creatureId.textContent = `#${data.id}`;
  weightEl.textContent = `Weight: ${data.weight}`;
  heightEl.textContent = `Height: ${data.height}`;

  // Clear previous types
  typesEl.innerHTML = "";

  data.types.forEach(typeObj => {
    const typeSpan = document.createElement("span");
    typeSpan.textContent = typeObj.name.toUpperCase();
    typesEl.appendChild(typeSpan);
  });

  const stats = {};
  data.stats.forEach(stat => {
    stats[stat.name] = stat.base_stat;
  });

  hpEl.textContent = stats.hp;
  attackEl.textContent = stats.attack;
  defenseEl.textContent = stats.defense;
  specialAttackEl.textContent = stats["special-attack"];
  specialDefenseEl.textContent = stats["special-defense"];
  speedEl.textContent = stats.speed;
};

searchButton.addEventListener("click", async () => {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) return;

  clearUI();

  try {
    const response = await fetch(`${API_URL}${query}`);
    if (!response.ok) {
      throw new Error("Creature not found");
    }

    const data = await response.json();
    displayCreature(data);
  } catch (error) {
    alert("Creature not found");
  }
});
