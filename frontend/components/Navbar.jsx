import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className=" text-black px-6 py-4 flex justify-between items-center">

            <h2 className="text-xl font-bold">Contact Manager</h2>

            <div className="space-x-4">
                <Link 
                  to="/" 
                  className="px-4 py-2 bg-white text-black border-2 border-black rounded hover:bg-black hover:text-white "
                >
                  View Contacts
                </Link>

                <Link 
                  to="/create" 
                  className="px-4 py-2 bg-green-600 border-2 border-green-600 rounded hover:bg-cyan-600 text-white"
                >
                  New Contact
                </Link>
            </div>

        </nav>
    )
}

export default Navbar;