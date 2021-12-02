// require("dotenv").config();
const { Console } = require("console");
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express()
const Rollbar = require("rollbar");

app.use(express.static("client"))

const rollbar = new Rollbar({
    accessToken: "cb70f6fc48504b9b89581c679d3f4171",
    captureUncaught: true,
    captureUnhandledRejections: true,
})

//endpoints
app.get("/", () => {
    resizeBy.sendFile(path.join(__dirname, "../index.html"))
})

app.get("/", (req, res) => {
    

    res.sendFile(path.join(__dirname, "../client/index.html"))

    rollbar.info("Someone visited the site")
})




rollbar.log("server started")

const port = process.env.PORT || 4040

app.listen(port, () => console.log(`server running on ${port}`))