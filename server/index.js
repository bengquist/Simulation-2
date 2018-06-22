require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const houseCtrl = require("./controllers/house_controller");

const app = express();

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.get("/api/houses", houseCtrl.getHouses);
app.post("/api/houses", houseCtrl.addHouse);
app.delete("/api/houses/:id", houseCtrl.deleteHouse);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
