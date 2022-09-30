const query = document.getElementById("query");

query.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    getStores();
  }
});

const emptyDeck = () => {
  let deck = document.querySelectorAll("div.movieCard");
  console.log(`DECK ${deck}`);
  if (deck.length > 0) {
    deck.forEach(card => {
      card.remove();
      console.log("borrado");
    });
  }

  let errors = document.querySelectorAll("h1.error");
  if (errors.length > 0) {
    errors.forEach(error => {
      error.remove();
    });
  }
};
const getError = msg => {
  const message = document.createElement("h1");
  message.classList.add("error");
  message.innerText = msg;
  moviesDeck.appendChild(message);
};

const getStores = async () => {
  const stores = [
    {
      days: ["martes", "jueves"],
      category: "Frutas & Verduras",
      name: "El bananero",
      description: "las mejores frutas y verduras sapeeee",
      delivery: true,
      pos: true,
      whatsapp: "+59891077695",
      picture: "./puesto.jpg",
    },
    {
      day: ["martes", "miercoles", "sabado"],
      category: "Queseria",
      name: "El quesito",
      description:
        "Nueva Helvecia con todo el sabor, vendemos todo tipo de keso , muzarela, para rayar y todo eso.",
      delivery: false,
      pos: true,
      whatsapp: "+59891077695",
      picture: "./queseria.jpg",
    },
    {
      days: ["sabado", "domingo"],
      category: "Pescaderia",
      name: "Como sardina en lata",
      description: "Frutos del rio de la plata directo a su casa",
      delivery: false,
      pos: false,
      whatsapp: "+59891077695",
      picture: "./pescaderia.jpg",
    },
    {
      days: ["viernes"],
      category: "Frutas & Verduras",
      name: "El gordo sandia",
      description: "El mejor sabor, pasa y llevate toda la frula",
      delivery: true,
      pos: false,
      whatsapp: "",
      picture: "./puesto.jpg",
    },
  ];
  try {
    const storesList = document.getElementById("storesList");
    /*if (result.Response === "False") {
      getError(result.Error);
    } else emptyDeck();*/
    stores.map(store => {
      //creating column to contain the card
      const col = document.createElement("div");
      col.classList.add("col");
      //creating the card container
      const card = document.createElement("div");
      card.classList.add("card");
      card.classList.add("shadow-lg");
      col.appendChild(card);
      //adding an image
      const storImage = document.createElement("img");
      storImage.src = store.picture;
      card.appendChild(storImage);
      //creating card body
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      card.appendChild(cardBody);
      //Store label
      const storeName = document.createElement("h5");
      storeName.appendChild(store.name);
      card.appendChild(storeName);
      //Store info
      //Working days
      //falta iterar en los dias
      const workingDays = document.createElement("h6");
      workingDays.classList.add("card-subtitle");
      workingDays.classList.add("mb-2");
      workingDays.classList.add("text-muted");
      //working days icon
      const dayIcon = document.createElement("i");
      dayIcon.classList.add("fa-solid");
      dayIcon.classList.add("fa-calendar");
      dayIcon.appendChild(store.days[0]);
      //Store category
      const storeCategory = document.createElement("h6");
      storeCategory.classList.add("card-subtitle");
      storeCategory.classList.add("mb-2");
      storeCategory.classList.add("text-muted");
      //Store category icon
      const categoryIcon = document.createElement("i");
      categoryIcon.classList.add("fa-solid");
      categoryIcon.classList.add("fa-apple-whole");
      categoryIcon.appendChild(store.category);
      //Store description
      const storeDescription = document.createElement("p");
      storeDescription.classList.add("card-text");
      storeDescription.appendChild(store.description);
      //Store services
    });

    result.Search.forEach(movie => {
      //creating card
      const card = document.createElement("div");
      card.classList.add("movieCard");
      //adding poster
      const poster = document.createElement("img");
      poster.src = movie.Poster;
      card.appendChild(poster);
      //Adding Title and Year
      const cardText = document.createElement("div");
      cardText.classList.add("info");
      const title = document.createElement("h2");
      const year = document.createElement("h4");
      title.innerHTML = movie.Title;
      year.innerHTML = movie.Year;
      cardText.appendChild(title);
      cardText.appendChild(year);
      card.appendChild(cardText);
      //adding movie card to deck
      moviesDeck.appendChild(card);
    });
  } catch (error) {
    console.log(error);
    getError(error);
  }
};
