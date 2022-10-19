import connect from "../utils/db.js";



export class ContactsController{

    static async getAll(req, res){

        const db = await connect();
        const result = await db.collection("kontakte").find().toArray();
        console.log("got contacts @ ContactsController");
        res.status(200).json({message: "contacts found", data: result });

    }

    static async add(req, res){
        const body = req.body;

        const db = await connect();
        const result = await db.collection("kontakte").insertOne(body);
        res.status(201).json({message: "added new contact", data: result});
    }

}