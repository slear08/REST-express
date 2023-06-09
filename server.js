import express from "express";
import connectionDB from "./config/db.js";
import dotenv from "dotenv";
import router from "./routes/book.js";
dotenv.config();
connectionDB();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use("/books", router);

app.listen(PORT, () => {
  console.log(`listening on PORT = ${PORT}`);
});
