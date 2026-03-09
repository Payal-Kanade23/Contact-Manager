import { useEffect, useState } from "react";
import axios from "axios";

function ViewContacts() {
  const [contacts, setContacts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    name : "",
    email:"",
    phone:""
  });
  // Fetch all contacts
  const getContacts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/contacts");
      setContacts(res.data.contacts || res.data); // handle different response shapes
    } catch (err) {
      console.error("Error fetching contacts:", err);
      alert("Failed to fetch contacts");
    }
  };

  // Delete a contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/contacts/${id}`);
      alert("Contact deleted successfully!");
      getContacts(); // refresh the list
    } catch (err) {
      console.error("Error deleting contact:", err);
      alert("Failed to delete contact");
    }
  };

  const handleEdit = (contact) =>{
      setEditId(contact._id);
      setEditData({
        name:contact.name,
        email:contact.email,
        phone:contact.phone
      })

  }

  const handleChange = (e) =>{
    setEditData({
      ...editData,
      [e.target.name]:e.target.value
    });
  }  //  Fetch contacts on mount

const updateContact =async(id) => {
   console.log("Update clicked", id);
     console.log("Data being sent:", editData);

  try{
     await axios.put(`http://localhost:8000/api/contacts/${id}`, editData);
     alert("COntact updated successfully!");
     setEditId(null);
     getContacts();
    }catch(error){
    console.error("Error updating contact:", error);
  }
}

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h2 className="m-7 text-black-800 text-lg rounded text-center w-[50%] py-3 bg-cyan-500"> All Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        contacts.map((c) => (
          <div key={c._id} className="border border-gray-400 rounded w-[50%] p-5 m-7 justify-center">
              {editId === c._id ? (
                <>
                 <label>Name: </label>
                <input 
                className="border border-gray-400 px-4 w-[50%] py-2 rounded  mb-4 "
                name = "name"
                value={editData.name}
                onChange={handleChange}
                /><br/>
                 <label>Email: </label>
                <input 
                className="border border-gray-400 px-4 w-[50%] py-2 rounded ml-1 mb-4 text-left"
                name="email"
                value={editData.email}
                onChange={handleChange}
                /><br/>
                 <label>Phone: </label>
                <input 
                name="phone"
                className="border border-gray-400 px-4 w-[50%] py-2 rounded  mb-4 text-left"
                value={editData.phone}
                onChange={handleChange}
                /><br/>
                <button  className="px-4 py-2  rounded bg-cyan-500 text-black-500  hover:bg-cyan-700 "  onClick={() => updateContact(c._id)}>Save</button>
                </>
              ):(
                <>
                <h3 className="text-lg font-bold m-2 ">{c.name}</h3>
            <p className="m-2">Email: {c.email}</p>
            <p className="m-2">Phone: {c.phone}</p>
            <button   className="px-4 py-2  rounded bg-blue-500 text-white-500 m-2 mr-4 hover:bg-blue-700 " onClick={() => handleEdit(c)}>
              Update
            </button>
            <button  className="px-4 py-2  rounded bg-red-500 text-black-500 m-2 hover:bg-red-700 " onClick={() => deleteContact(c._id)}>Delete</button>
                </>
              )}

            
          </div>
        ))
      )}
    </div>
  );
}

export default ViewContacts;