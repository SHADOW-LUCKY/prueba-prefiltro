//Crud Bordes

import { DBconnection } from "../config/mongo.js";
import { ObjectId } from "mongodb";

export const getBordes = async (req, res) => {
    try {
        const db = await DBconnection();
        const bordes = await db.collection("bordes").find().toArray();
        res.status(200).json(
            bordes
        )
    } catch (error) {
        res.status(400).json(error);
    }
}

export const createBorde = async (req, res) => {
    try {
        const db = await DBconnection();
        const {name, available,imagen,type} = req.body
        const data = {
            name,
            description,
            available,
            imagen
        }
        const bordes = await db.collection("bordes").insertOne(data);
        res.status(200).json({
            msg: "bordes created",
            data: bordes
        })
    } catch (error) {
        res.status(400).json(error);
    }
}

export const updateBorde = async (req, res) => {
    try {
        const db = await DBconnection();
        const {id} = req.params
        const bordes = await db.collection("bordes").updateOne({_id:new ObjectId(id)}, {$set: req.body});
        res.status(200).json({
            msg: "bordes updated",
            data: bordes
        })
    } catch (error) {
        res.status(400).json(error);
    }
}

export const deleteBorde = async (req, res) => {
    try {
        const db = await DBconnection();
        const {id} = req.params
        const bordes = await db.collection("bordes").deleteOne({_id: new ObjectId(id)});
        res.status(200).json({
            msg: "bordes deleted",
            data: bordes
        })
    } catch (error) {
        res.status(400).json(error);
    }
}