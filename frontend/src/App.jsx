import {BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";


function App(){
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<ContactList />} />
        <Route path="/create" element={<ContactForm />} />
     
            </Routes>
        </BrowserRouter>
    )
}

export default App;