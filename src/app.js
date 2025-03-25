const express = require('express');
const app = express();

app.get("/user", (req, res) => {
    res.send({firstName: "Apurva", lastName: "Sharma"})
})

app.post("/user", (req, res) => {
    res.send("Data saved to DB")
})

app.delete("/user", (req, res) => {
    res.send("Data deleted successfully.")
})

app.listen(3000, () => {
    console.log("Server running successfully")
});