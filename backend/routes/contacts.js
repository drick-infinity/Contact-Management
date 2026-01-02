import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// Get all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new contact
router.post("/", async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const newContact = await Contact.create({ name, email, phone });
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a contact
router.delete("/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
