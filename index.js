const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 4000;

app.listen(PORT, () => console.log("Server up and running"));

app.get("/", async (req, res) => {
  console.log("Get request");
  res.send({
    message: "DishDart",
  });
});

// Export the Express API
module.exports = app;
