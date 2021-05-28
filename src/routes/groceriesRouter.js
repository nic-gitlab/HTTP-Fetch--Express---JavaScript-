import express from "express";

import Grocery from "../models/Grocery.js";

const groceriesRouter = express.Router();

//**********EXCEEDS EXPECTATIONS SUBMISSION******************

groceriesRouter.get("/", (req, res) => {
  res.render("index", { groceries: Grocery.findAll() });
});

groceriesRouter.get("/new", (req, res) => {
  res.render("new");
});

groceriesRouter.post("/", (req, res) => {
  const groceryName = req.body.name;
  if (groceryName === "") {
    res.redirect("/groceries/new");
  } else {
    const newGroceryItem = new Grocery({ name: groceryName });
    newGroceryItem.save();
    res.redirect("/groceries");
  }
});

export default groceriesRouter;
