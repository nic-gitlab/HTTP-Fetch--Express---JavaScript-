import express from "express";

import Grocery from "../../../models/Grocery.js";

const apiGroceriesRouter = new express.Router();

apiGroceriesRouter.get("/random", (req, res) => {
  res.set({ "Content-Type": "application/json" }).json(Grocery.getRandom());
});

apiGroceriesRouter.post("/", (req, res) => {
  const groceryItem = new Grocery(req.body.name);
  groceryItem.save();
  res.redirect("/groceries");
});

export default apiGroceriesRouter;
