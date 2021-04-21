import express from "express";
// node does not run "import/from" ( typescript -D & tsc --init )
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

/*
    Methods:

    GET = search
    POST = create
    PUT = change/update
    DELETE = ..
    PATCH = change specific info

    Notes:
    - different methods can have the same route 
    - browsers always require get methods first



// first route to be created
app.get("/", (request, response) => {
    //return response.send("NLW 05");
    return response.json({
        message: "NLW 05"
    });
})

app.post("/users", (request, response) => {
    return response.json({
        message: "User saved successfully!!"
    });
})

*/
app.use(routes);

app.listen(3333, () => console.log("Server is running on port 3333."));