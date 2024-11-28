let models = [
  {
    name: "Vélo Sportif X",
    description: "Un vélo sportif pour des performances de haut niveau.",
    price: 1200,
    status: "En stock",
    image: "images/download-1.jpg"
  },
  {
    name: "Vélo de Ville Y",
    description: "Idéal pour la ville, léger et confortable.",
    price: 850,
    status: "Rupture de stock",
    image: "images/download.jpg"
  },
  {
    name: "Vélo Route Z",
    description: "Vélo de course haute performance.",
    price: 1500,
    status: "En stock",
    image: "images/download.jpg"
  },
  {
    name: "Vélo VTT A",
    description: "Vélo tout terrain pour aventures extrêmes.",
    price: 900,
    status: "En stock",
    image: "images/download.jpg"
  },
  {
    name: "Vélo Urbain B",
    description: "Parfait pour les trajets quotidiens en ville.",
    price: 600,
    status: "Rupture de stock",
    image: "images/download.jpg"
  },
  {
    name: "Vélo Électrique C",
    description: "Vélo électrique pour plus de confort et de vitesse.",
    price: 2200,
    status: "En stock",
    image: "images/download.jpg"
  },
  {
    name: "Vélo de Route D",
    description: "Vélo de route avec un design aérodynamique.",
    price: 1400,
    status: "En stock",
    image: "images/download.jpg"
  },
  {
    name: "Vélo de Ville E",
    description: "Vélo élégant pour des déplacements urbains.",
    price: 750,
    status: "En stock",
    image: "images/download.jpg"
  },
  {
    name: "Vélo VTT F",
    description: "Vélo robuste pour les sentiers de montagne.",
    price: 1000,
    status: "Rupture de stock",
    image: "images/download.jpg"
  },
  {
    name: "Vélo Pliant G",
    description: "Vélo pliant pratique pour le transport.",
    price: 500,
    status: "En stock",
    image: "images/download.jpg"
  }
];

let isAdmin = false; // Variable pour savoir si l'utilisateur est administrateur

// Afficher les modèles
function displayModels() {
  const modelesContainer = document.getElementById("modeles-container");
  modelesContainer.innerHTML = ""; // Réinitialiser la section des modèles
  models.forEach((model, index) => {
    const modelElement = document.createElement("div");
    modelElement.classList.add("modele");
    modelElement.innerHTML = `
      <img src="${model.image}" alt="${model.name}">
      <div class="modele-info">
        <h3>${model.name}</h3>
        <p class="modele-description">${model.description}</p>
        <p class="modele-prix">Prix: ${model.price} DZD</p>
        <p class="modele-availability">Disponibilité: <span class="${model.status === 'En stock' ? 'available' : 'out-of-stock'}">${model.status}</span></p>
        ${isAdmin ? `<button onclick="deleteModel(${index})">Supprimer</button>` : ""}
      </div>
    `;
    modelesContainer.appendChild(modelElement);
  });
}

// Supprimer un modèle
function deleteModel(index) {
  models.splice(index, 1);
  displayModels(); // Réactualiser l'affichage
}

// Afficher ou masquer le formulaire de connexion
function toggleLoginForm() {
  const loginForm = document.getElementById("admin-login-form");
  const loginButton = document.getElementById("login-button");

  if (loginForm.style.display === "none" || loginForm.style.display === "") {
    loginForm.style.display = "block";
    loginButton.style.display = "none";
  } else {
    loginForm.style.display = "none";
    loginButton.style.display = "block";
  }
}

// Connexion admin
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "admin123") {
    isAdmin = true; // Marquer comme administrateur
    document.getElementById("admin-tools").style.display = "block"; // Afficher les outils de l'admin
    displayModels(); // Afficher les modèles
    document.getElementById("admin-login-form").style.display = "none"; // Masquer le formulaire
  } else {
    alert("Identifiants incorrects");
  }
}

// Ajouter un modèle (afficher le formulaire)
function addModele() {
  document.getElementById("add-model-form").style.display = "block";
}

// Enregistrer un modèle
function saveModel() {
  const name = document.getElementById("model-name").value;
  const description = document.getElementById("model-description").value;
  const price = document.getElementById("model-price").value;
  const image = document.getElementById("model-image").files[0];
  const status = document.getElementById("model-status").value;

  if (name && description && price && image && status) {
    const newModel = {
      name,
      description,
      price: parseFloat(price),
      status,
      image: URL.createObjectURL(image)
    };
    models.push(newModel);
    displayModels();
    cancelAddModel();
  } else {
    alert("Tous les champs sont obligatoires !");
  }
}

// Annuler l'ajout de modèle
function cancelAddModel() {
  document.getElementById("add-model-form").style.display = "none";
}

// Initialisation : afficher les modèles dès le début
displayModels();
