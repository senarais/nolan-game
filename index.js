import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.get("/", (req, res) => {
  res.render("index.ejs");
});





app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});