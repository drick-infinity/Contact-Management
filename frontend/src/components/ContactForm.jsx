import { useState } from "react";
import axios from "axios";

export default function ContactForm({ fetchContacts }) {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contacts", contact);
    setContact({ name: "", email: "", phone: "" });
    fetchContacts();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 border rounded">
      <input
        name="name"
        value={contact.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 w-full"
        required
      />
      <input
        name="email"
        value={contact.email}
        onChange={handleChange}
        placeholder="Email"
        className="border p-2 w-full"
        required
      />
      <input
        name="phone"
        value={contact.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Contact
      </button>
    </form>
  );
}
