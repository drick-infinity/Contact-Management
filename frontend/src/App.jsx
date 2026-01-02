import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await axios.get("http://localhost:5000/api/contacts");
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Contact Manager</h1>
      <ContactForm fetchContacts={fetchContacts} />
      <ContactList contacts={contacts} fetchContacts={fetchContacts} />
    </div>
  );
}

export default App;
