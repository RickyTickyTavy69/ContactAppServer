import connect from "../utils/db.js";

export class CalllistController{

    static async addContact(req, res){

        const body = req.body;
        console.log("body @ Calllist Controller", body);

        const db = await connect();
        const result = await db.collection("callList").insertOne(body);                 // insertOne fügt ein Dokument in die Kollektion zu.
        res.status(201).json({message: "contact added to the List", data: result});
    }

    static async getAll(req, res){

        const db = await connect();
        const result = await db.collection("callList").find().toArray();
        res.status(200).json({message: "got your contacts", data: result});
    }
}

export default CalllistController;