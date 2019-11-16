const fs = require("fs");

const oldData = require("./src/data/products.json");

const data = oldData.map(oldy => ({
  ...oldy,
  CO2: Math.floor(Math.random() * 50) + 50,
  hours: Math.floor(Math.random() * 50)
}));

fs.writeFileSync("./src/data/products.json", JSON.stringify(data));
