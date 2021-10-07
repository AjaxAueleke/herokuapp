const express = require("express");
const app = express();

app.get("/practice",(_, res) => {
    res.send("GET ROUTE");
});

app.post("/practice", (_, res)=> {
    res.send("POST ROUTE");
});

app.delete("/practice", (_, res)=> {
    res.send("DELETE ROUTE");
});
app.put("/practice", (_,res)=> {
    res.send("PUT ROUTE");
});