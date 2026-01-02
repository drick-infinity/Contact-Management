import axios from "axios";

export default function ContactList({ contacts, fetchContacts }) {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/contacts/${id}`);
    fetchContacts();
  };

  return (
    <div className="p-4">
      {contacts.map((c) => (
        <div key={c._id} className="flex justify-between border-b py-2">
          <div>
            <p className="font-bold">{c.name}</p>
            <p>{c.email} | {c.phone}</p>
          </div>
          <button
            onClick={() => handleDelete(c._id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
