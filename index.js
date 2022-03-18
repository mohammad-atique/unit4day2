const express = require("express");

const app = express();

app.get("", function (req, res) {
    res.send("Hello");
    // console.log("hello")
})
app.get("/books", (req, res) => {
    res.send(
        [{
            name: "The Alchemist",
            author: "Paulo Coelho"
        },
        {
            name: "The Pilgrimage",
            author:"Paulo Coelho"
        },
        {
            name: "Atomic Habits",
            author:"James Clear"
        },
        {
            name:"Rich Dad Poor Dad",
            author:"Robert Kiyosaki"
        }])
})

app.listen(5000, () => {
    console.log("Listning on 5000")
});