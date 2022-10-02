const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
const port = 8080;


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

    res.send("Hello Hilbert!");
});

app.post("/", (req, res) => {
    const { data } = req.body;

    fs.appendFile("records.txt", `${data}\n`, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error");
        } else {
            res.status(200).send(`Successfully stored "${data}"`);
        }
    });

});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});