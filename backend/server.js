import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDb from "./config/db.js";
import contactRoutes from "./routes/contacts.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDb();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "dist")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
