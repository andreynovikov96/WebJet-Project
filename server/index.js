const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

let carTable = require("../server/controllers/carTable");
app.get("/carTable", carTable.getData);
app.put("/carTable/:id", carTable.updateData);
app.post("/carTable/", carTable.saveData);
app.delete("/carTable/:id", carTable.removeData);

let countryTable = require("../server/controllers/countryTable");
app.get("/countryTable", countryTable.getData);
app.put("/countryTable/:id", countryTable.updateData);

let userTable = require("../server/controllers/userTable");
app.get("/userTable", userTable.getData);
app.put("/userTable/:id", userTable.updateData);

app.listen(3000);