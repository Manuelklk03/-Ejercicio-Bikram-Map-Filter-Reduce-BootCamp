//RESUELVE LOS EJERCICIOS AQUI

// Ejercicio 1
const numbers = [4, 5, 6, 7, 8, 9, 10];

const elevados = () => {
  return numbers.map((number) => number ** number);
};

// Ejercicio 2
const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];

const result2 = foodList.map((food) => {
  if (food === "Pizza") {
    return `Como soy de Italia, amo comer ${food}`;
  }

  if (food === "Ramen") {
    return `Como soy de Japón, amo comer ${food}`;
  }

  if (food === "Paella") {
    return `Como soy de Valencia, amo comer ${food}`;
  }

  return `Aunque no como carne, el ${food} es sabroso`;
});

// Ejercicio 3
const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

const result3 = staff.map((person) => {
  return `${person.name} es ${person.role} y le gusta ${person.hobbies[0]} y ${person.hobbies[1]}`;
});

// Ejercicio 4
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter((number) => number % 2 !== 0);

// Ejercicio 5
const foodList2 = [
  {
    name: "Tempeh",
    isVeggie: true,
  },
  {
    name: "Cheesbacon burguer",
    isVeggie: false,
  },
  {
    name: "Tofu burguer",
    isVeggie: true,
  },
  {
    name: "Entrecot",
    isVeggie: false,
  },
];

const result5 = foodList2
  .filter((food) => food.isVeggie)
  .map((food) => {
    if (food.name === "Tempeh") {
      return `Que rico ${food.name} me voy a comer!`;
    }

    return `Que rica ${food.name} me voy a comer!`;
  });

// Ejercicio 6
const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a Cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];

const result6 = inventory
  .filter((item) => item.price > 300)
  .map((item) => item.name);
