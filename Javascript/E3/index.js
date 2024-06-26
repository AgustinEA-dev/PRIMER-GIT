const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const form = document.getElementById('form')
const input = document.getElementById('number')
const container = document.getElementById('container')

// const value = parseInt(input.value)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  pizzas.forEach(pizza => {
    if (pizza.id === parseInt(input.value)) {
      container.innerHTML = `
      <div class="card">
      <h3 class="card-title">Nombre: ${pizza.nombre}</h3>
      <h3 class="card-price">Precio: ${pizza.precio}</h3>
      <img src="${pizza.imagen}" />
  </div>
      `
      localStorage.setItem("últimaBuscada", JSON.stringify(pizza));
     
    }
  });
})

