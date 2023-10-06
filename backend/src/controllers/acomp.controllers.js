//Crud Acompañamientos

import { DBconnection } from "../config/mongo.js";
import { ObjectId } from "mongodb";

export const getAcomp = async (req, res) => {
    try {
        const db = await DBconnection();
        const acomp = await db.collection("acompanamientos").find().toArray();
        res.status(200).json(
            acomp
        )
    } catch (error) {
        res.status(400).json(error);
    }
}

export const createAcomp = async (req, res) => {
    try {
        const db = await DBconnection();
        const {name, available,imagen,description} = req.body
        const data = {
            name,
            description,
            available,
            imagen
        }
        const acomp = await db.collection("acompanamientos").insertOne(data);
        res.status(200).json({
            msg: "acompanamientos created",
            data: acomp
        })
    } catch (error) {
        res.status(400).json(error);
    }
}

export const updateAcomp = async (req, res) => {
    try {
        const db = await DBconnection();
        const {id} = req.params
        const acomp = await db.collection("acompanamientos").updateOne({_id:new ObjectId(id)}, {$set: req.body});
        res.status(200).json({
            msg: "acompanamientos updated",
            data: acomp
        })
    } catch (error) {
        res.status(400).json(error);
    }
}

export const deleteAcomp = async (req, res) => {
    try {
        const db = await DBconnection();
        const {id} = req.params
        const acomp = await db.collection("acompanamientos").deleteOne({_id: new ObjectId(id)});
        res.status(200).json({
            msg: "acompanamientos deleted",
            data: acomp
        })
    } catch (error) {
        res.status(400).json(error);
    }
}