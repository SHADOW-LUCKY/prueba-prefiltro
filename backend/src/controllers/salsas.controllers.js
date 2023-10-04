//Crud Salsas

import { DBconnection } from "../config/mongo.js";
import { ObjectId } from "mongodb";

export const getSalsas = async (req, res) => {
    try {
        const db = await DBconnection();
        const salsas = await db.collection("salsas").find().toArray();
        res.status(200).json(
            salsas
        )
    } catch (error) {
        res.status(400).json(error);
    }
}

export const createSalsa = async (req, res) => {
    try {
        const db = await DBconnection();
        const {name, available,imagen,type} = req.body
        const data = {
            name,
            description,
            available,
            imagen
        }
        const salsas = await db.collection("salsas").insertOne(data);
        res.status(200).json({
            msg: "salsa created",
            data: salsas
        })
    } catch (error) {
        res.status(400).json(error);
    }
}

export const updateSalsa = async (req, res) => {
    try {
        const db = await DBconnection();
        const {id} = req.params
        const salsas = await db.collection("salsas").updateOne({_id:new ObjectId(id)}, {$set: req.body});
        res.status(200).json({
            msg: "salsa updated",
            data: salsas
        })
    } catch (error) {
        res.status(400).json(error);
    }
}

export const deleteSalsa = async (req, res) => {
    try {
        const db = await DBconnection();
        const {id} = req.params
        const salsas = await db.collection("salsas").deleteOne({_id: new ObjectId(id)});
        res.status(200).json({
            msg: "salsa deleted",
            data: salsas
        })
    } catch (error) {
        res.status(400).json(error);
    }
}