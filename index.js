const mongoose = require("mongoose");
const express = require("express");
const http = require("node:http");
require("dotenv").config();

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use("/api", require("./routes/api"));
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URL || "mongodb://127.0.0.1/maximus-todos").then(() => {
    server.listen(+process.env.PORT || 3000, () => {
        console.log("Started on port", +process.env.PORT || 3000);
    });
});
