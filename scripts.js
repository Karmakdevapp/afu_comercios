/*const query = document.getElementById("query");

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
};*/
//async cuando sea api
const getStores = () => {
  const stores = [
    {
      days: ["martes", "jueves"],
      category: "Frutas & Verduras",
      name: "Verduleria MitMart",
      description: "las mejores frutas y verduras, siempre frescas",
      delivery: true,
      pos: true,
      whatsapp: "+59891077695",
      picture: "./puesto.jpg",
    },
    {
      days: ["martes", "miercoles", "sabado"],
      category: "Queseria",
      name: "Don Alberto",
      description:
        "Nueva Helvecia con todo el sabor, vendemos productos de calidad y gran sabor",
      delivery: false,
      pos: true,
      whatsapp: "+59891077695",
      picture: "./queseria.jpg",
    },
    {
      days: ["sabado", "domingo"],
      category: "Pescaderia",
      name: "El tiburon",
      description: "Frutos del rio de la plata directo a su casa",
      delivery: false,
      pos: false,
      whatsapp: "+59891077695",
      picture: "./pescaderia.jpg",
    },
    {
      days: ["viernes"],
      category: "Frutas & Verduras",
      name: "Tomate y Lechuga",
      description: "Gran calidad en frutas y verduras, productos de canelones",
      delivery: true,
      pos: false,
      whatsapp: "",
      picture: "./puesto.jpg",
    },
  ];

  const storesList = document.getElementById("storesList");
  /*if (result.Response === "False") {
      getError(result.Error);
    } else emptyDeck();*/
  stores.map(store => {
    //creating column to contain the card
    const col = document.createElement("div");
    col.setAttribute("id", store.days);
    col.classList.add("col");
    //creating the card container
    const card = document.createElement("div");
    card.classList.add("card", "shadow-lg");
    col.appendChild(card);
    //adding an image
    const storeImage = document.createElement("img");
    storeImage.classList.add("card-img-top");
    storeImage.src = store.picture;
    card.appendChild(storeImage);
    //creating card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);
    //Store label
    const storeName = document.createElement("h4");
    storeName.classList.add("card-title");
    storeName.textContent = store.name;
    cardBody.appendChild(storeName);
    //Store info

    //Store category
    const storeCategory = document.createElement("h6");
    storeCategory.classList.add("card-subtitle", "mb-2", "text-muted");

    //Store category icon
    const categoryIcon = document.createElement("i");
    categoryIcon.classList.add("fa-solid", "fa-apple-whole");
    categoryIcon.textContent = " " + store.category;
    storeCategory.appendChild(categoryIcon);
    cardBody.appendChild(storeCategory);
    //Working days
    //falta iterar en los dias
    const workingDays = document.createElement("h6");
    workingDays.classList.add("card-subtitle", "mb-2", "text-muted");

    //working days icon
    const dayIcon = document.createElement("i");
    dayIcon.classList.add("fa-solid", "fa-calendar");
    store.days.map(day => {
      dayIcon.textContent += " " + day;
    });

    workingDays.appendChild(dayIcon);
    cardBody.appendChild(workingDays);

    //Store description
    const storeDescription = document.createElement("p");
    storeDescription.classList.add("card-text");
    storeDescription.textContent = store.description;
    cardBody.appendChild(storeDescription);
    //Store services
    //whatsapp despues hacerlo dinamico true false
    if (store.whatsapp.length > 0) {
      const badgeWhatsapp = document.createElement("span");
      badgeWhatsapp.classList.add("badge", "rounded-pill", "whatsapp");
      const whatsappIcon = document.createElement("i");
      whatsappIcon.classList.add("fa-brands", "fa-whatsapp");
      badgeWhatsapp.appendChild(whatsappIcon);
      const textWhatsapp = document.createTextNode(" Whatsapp");
      badgeWhatsapp.appendChild(textWhatsapp);
      const whatsappLink = document.createElement("a");
      whatsappLink.href = `https://wa.me/${store.whatsapp}`;
      whatsappLink.appendChild(badgeWhatsapp);
      cardBody.appendChild(whatsappLink);
    }

    if (store.pos) {
      const badgeCards = document.createElement("span");
      badgeCards.classList.add("badge", "rounded-pill", "text-dark", "cards");
      const cardsIcon = document.createElement("i");
      cardsIcon.classList.add("fa-regular", "fa-credit-card");
      badgeCards.appendChild(cardsIcon);
      const textCards = document.createTextNode(" Tarjetas");
      badgeCards.appendChild(textCards);
      cardBody.appendChild(badgeCards);
    }

    if (store.delivery) {
      const badgeDelivery = document.createElement("span");
      badgeDelivery.classList.add(
        "badge",
        "rounded-pill",
        "bg-primary",
        "delivery"
      );
      const deliveryIcon = document.createElement("i");
      deliveryIcon.classList.add("fa-solid", "fa-truck");
      badgeDelivery.appendChild(deliveryIcon);
      const textDelivery = document.createTextNode(" Delivery");
      badgeDelivery.appendChild(textDelivery);
      cardBody.appendChild(badgeDelivery);
    }
    storesList.appendChild(col);
  });
  //Add control to days filter

  const daysCheckboxes = document.getElementsByClassName("form-check-input");
  const days = [...daysCheckboxes];

  days.map(checkbox => {
    checkbox.addEventListener("change", e => {
      if (e.target.checked) {
        showCard(e.target.id);
      } else {
        hideCard(e.target.id);
      }
    });
  });

  const showCard = day => {
    const divs = document.querySelectorAll("div.col");
    const cards = [...divs];
    cards.map(card => {
      card.id.includes(day) ? (card.style.display = "block") : null;
    });
  };

  const hideCard = day => {
    const divs = document.querySelectorAll("div.col");
    const cards = [...divs];
    cards.map(card => {
      card.id.includes(day) ? (card.style.display = "none") : null;
    });
  };
};
getStores();
