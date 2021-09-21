const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, respond) => {
  respond.sendFile(__dirname + "/index.html");
});

app.post("/", (req, respond) => {
  let weight = +req.body.weight;
  let height = +req.body.height;
  var range = "";
  var result = (weight / height / height) * 10000;
  if (result < 18.5) {
    range = "Under-Weight";
  } else if (result > 18.5 && result < 24.9) {
    range = "Healthy";
  } else if (result > 24.5 && result < 30) {
    range = "Over-Weight";
  } else if (result > 30) {
    range = "Obese";
  }
  var bmi = result.toFixed(2);
  respond.send("The BMI of your body is   " + bmi + " " + range);
});

app.listen(3000, () => {
  console.log("server is now running");
});
