/* import { useEffect, useState} from "react"; */
import { Link } from "react-router-dom";
import "../index.css";

const NavBar = () => {
    return(
        <div className="flex w-full justify-around items-start mb-4 z-10 pt-3">
            <Link className="text-white text-3xl font-bold" to={"/"} >Home</Link>
            <Link className="text-white text-3xl font-bold" to={"/Users/"} >Users</Link>
            <Link className="text-white text-3xl font-bold" to={"/Cards/"} >Cards</Link>
            <Link className="text-white text-3xl font-bold" to={"/Contact/"} >Contact Us</Link>
        </div>  
    )
}

export default NavBar;