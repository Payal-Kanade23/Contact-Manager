import { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/contacts", form);
      alert("Contact created successfully!");
      setForm({ name: "", email: "", phone: "" }); // reset form
    } catch (err) {
      alert("Error creating contact");
    }
  };

  return (
    <form  className="mt-12" onSubmit={handleSubmit}>
      <label className="ml-7 mr-7">Name</label>
      <input className="border border-gray-400 px-4 w-[50%] py-2 rounded  mb-4 text-left" type="text" name="name" placeholder="Enter Name" value={form.name} onChange={handleChange} /><br/>
      <label className="ml-8 mr-7">Email</label>
      <input  className="border border-gray-400 px-4 w-[50%] py-2 rounded  mb-4" type="text" name="email" placeholder="Enter Email" value={form.email} onChange={handleChange} /><br/>
      <label className="ml-7 mr-7">Phone</label>
      <input className="border border-gray-400 px-4 w-[50%] py-2 rounded  mb-4" type="text" name="phone" placeholder="Enter Phone No" value={form.phone} onChange={handleChange} /><br/>
      <button  className="px-4 py-2  rounded bg-cyan-500 text-black-500 m-7 hover:bg-cyan-700 " type="submit">Create Contact</button>
    </form>
  );
}

export default ContactForm;