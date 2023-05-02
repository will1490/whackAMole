let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

for (let i=0; i<12; i++) {
  const cercle = document.createElement("div");
  cercle.classList.add("cercle");
  container.appendChild(cercle);
}

let score = 0;
let scoreCounter = document.createElement("div");
scoreCounter.classList.add("scoreCounter");
scoreCounter.textContent = `Score: ${score}`; // Ajout de texte au compteur de score
container.appendChild(scoreCounter);

function mole() {
  // Sélectionner un cercle aléatoire dans le conteneur
  const cercles = document.querySelectorAll(".cercle");
  const cercleAleatoire = cercles[Math.floor(Math.random() * cercles.length)];

  // Colorer le cercle en rouge
  cercleAleatoire.style.backgroundColor = "red";

  // Ajouter un gestionnaire d'événements de clic au cercle
  cercleAleatoire.addEventListener("click", () => {
    // Incrémenter le score
    score++;
    scoreCounter.textContent = `Score: ${score}`; // Mettre à jour le texte du compteur de score
  });

  // Réinitialiser la couleur du cercle après 1 seconde
  setTimeout(() => {
    cercleAleatoire.style.backgroundColor = "";
  }, 1000);
}

// Appeler la fonction mole toutes les secondes
setInterval(mole, 1000);