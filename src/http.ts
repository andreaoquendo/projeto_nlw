import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";
// node does not run "import/from" ( typescript -D & tsc --init )
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
    return response.render("html/client.html");
    
})

const http = createServer(app); // criando protocolo http
const io = new Server(http); // criando o protocolo web socket

io.on("connection", (socket: Socket) => {
    console.log("Connected", socket.id);
});

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

export { http , io };