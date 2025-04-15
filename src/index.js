import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send(`<h1>Hello ${process.env.name}</h1>`);
});

app.listen(8080, () => console.log("http://localhost:8080"));
