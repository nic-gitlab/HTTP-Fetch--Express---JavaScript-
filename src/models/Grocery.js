import fs from "fs";

const groceriesPath = "groceries.json";
const randGroceriesPath = "exceeds_random_items.json";

class Grocery {
  constructor({ name }) {
    this.name = name;
  }

  static findAll() {
    const groceriesData = JSON.parse(fs.readFileSync(groceriesPath)).groceries;
    const groceries = groceriesData.map((grocery) => {
      return new Grocery(grocery);
    });
    return groceries;
  }

  save() {
    const groceries = this.constructor.findAll();
    groceries.push(this);
    fs.writeFileSync(groceriesPath, JSON.stringify({ groceries: groceries }));
  }

  static getRandom() {
    const randomGroceryItem = JSON.parse(fs.readFileSync(randGroceriesPath))
      .items;
    const randomIndex = Math.ceil(Math.random() * randomGroceryItem.length);
    let newItem = randomGroceryItem.splice(randomIndex, 1);

    return newItem;
  }
}

export default Grocery;
