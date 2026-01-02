import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import contactRoutes from "./routes/contacts.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDb();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
