//crud Toppings

import { DBconnection } from "../config/mongo.js";
import { ObjectId } from "mongodb";

export const getToppings = async (req, res) => {
  try {
    const db = await DBconnection();
    const toppings = await db.collection("toppings").find().toArray();
    res.status(200).json(
      toppings
    )
  } catch (error) {
    res.status(400).json(error);
  }
}

export const createTopping = async (req, res) => {
  try {
    const db = await DBconnection();
    const {name, available,imagen,type} = req.body
    const data = {
      name,
      available,
      imagen,
      type
    }
    const toppings = await db.collection("toppings").insertOne(data);
    res.status(200).json({
      msg: "topping created",
      data: toppings
    })
  } catch (error) {
    res.status(400).json(error);
  }
}

export const updateTopping = async (req, res) => {
  try {
    const db = await DBconnection();
    const {id} = req.params
    const toppings = await db.collection("toppings").updateOne({_id:new ObjectId(id)}, {$set: req.body});
    res.status(200).json({
      msg: "topping updated",
      data: toppings
    })
  } catch (error) {
    res.status(400).json(error);
  }
}

export const deleteTopping = async (req, res) => {
  try {
    const db = await DBconnection();
    const {id} = req.params
    const toppings = await db.collection("toppings").deleteOne({_id: new ObjectId(id)});
    res.status(200).json({
      msg: "topping deleted",
      data: toppings
    })
  } catch (error) {
    res.status(400).json(error);
  }
}