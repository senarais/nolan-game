import express from "express";
import serverless from "serverless-http";
import path from "path";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/level1", (req, res) => {
  res.render("level1.ejs");
});

// ❗ Jangan panggil app.listen()
// Ekspor handler untuk Vercel
export default serverless(app);
