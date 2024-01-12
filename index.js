import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const PORT = 3500;

app.get("/", async (req, res) => {
  console.log("Get request");
  res.send({
    message: "DishDart",
  });
});

app.listen(PORT, () => console.log("Server up and running"));
