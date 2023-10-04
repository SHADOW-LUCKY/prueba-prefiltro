
import {DBconnection} from "../config/mongo.js";
import {ObjectId} from "mongodb";

export const getQuesos = async (req, res) => {
    try {
        const db = await DBconnection();
        const quesos = await db.collection("queso_bases").find().toArray();
        res.status(200).json(
            quesos
        )
    } catch (error) {
        res.status(400).json(error);
    }
}

export const createQueso = async (req, res) => {
    try {
        const db = await DBconnection();
        const {name, available,imagen,description} = req.body
        const data = {
            name,
            description,
            available,
            imagen
        }
        const quesos = await db.collection("queso_bases").insertOne(data);
        res.status(200).json({
            msg: "queso created",
            data: quesos
        })
    } catch (error) {
        res.status(400).json(error);
    }
}

export const updateQueso = async (req, res) => {
    try {
        const db = await DBconnection();
        const {id} = req.params
        const quesos = await db.collection("queso_bases").updateOne({_id:new ObjectId(id)}, {$set: req.body});
        res.status(200).json({
            msg: "queso updated",
            data: quesos
        })
    } catch (error) {
        res.status(400).json(error);
    }
}

export const deleteQueso = async (req, res) => {
    try {
        const db = await DBconnection();
        const {id} = req.params
        const quesos = await db.collection("queso_bases").deleteOne({_id: new ObjectId(id)});
        res.status(200).json({
            msg: "queso deleted",
            data: quesos
        })
    } catch (error) {
        res.status(400).json(error);
    }
}

