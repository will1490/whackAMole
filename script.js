let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

let score = 0;

for (let i=0; i<12; i++) {
    const cercle = document.createElement("div");
    cercle.classList.add("cercle");
    container.appendChild(cercle);
}


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
      console.log(`Score: ${score}`);
    });
  
    // Réinitialiser la couleur du cercle après 1 seconde
    setTimeout(() => {
      cercleAleatoire.style.backgroundColor = "";
    }, 1000);
  }
  
  // Appeler la fonction mole toutes les secondes
  setInterval(mole, 1000);
