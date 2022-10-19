import connect from "../utils/db.js";
import {ObjectId} from "mongodb";

export class favoritesController{

    static async addToFavorites(req, res){

        const body = req.body;
        console.log("body @ favorites", body);
        const db = await connect();
        const result = await db.collection("favoriten").insertOne(body);                 // insertOne fügt ein Dokument in die Kollektion zu.
        res.status(201).json({message: "favorite added", data: result});
    }

    static async getFavorites(req, res){

        const db = await connect();
        const result = await db.collection("favoriten").find().toArray();
        res.status(200).json({message: "got your favorites", data: result});
    }

    static async removeFavorite(req, res) {
        const id = req.body.id;
        console.log("@ removeFavorite id", id);
        const db = await connect();
        const result = await db.collection("favoriten").deleteOne({_id: new ObjectId(id)});
        res.status(200).json({message: "removed from favorites", data: result});
    }
}

export default favoritesController;