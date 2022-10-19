//import packages
import "./config/config.js";
import express from "express";
import colors from "colors";
import cors from "cors";
import bodyParser from "body-parser";


// import routes

import contactsRoutes from "./routes/contacts.route.js"
import callListRoutes from "./routes/callList.routes.js";
import favoriteRoutes from "./routes/favorite.routes.js";

// creating app

const app = express();


// middleware

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//starting app



const start = async () => {
    try{
        const PORT = process.env.PORT;
        app.listen(PORT, () => {
            console.log(colors.rainbow(`your app is still working... (on port ${PORT})`));
        });
    } catch(error) {
        console.error("error while starting server", error);
    };

};

start();

// routes

app.use("/contacts", contactsRoutes);
app.use("/calllist", callListRoutes);
app.use("/favorites", favoriteRoutes);