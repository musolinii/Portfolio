import React from "react";
import  logo from "../assets/logo.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () =>{
    return(
        <>
            <nav className="mb-20 flex items-center justify-between py-6">
                <a href="https://portfolio-orcin-pi-50.vercel.app/">

                <div className="flex flex-shrink-0 items-center">
                    <img src={logo} alt="" className="mx-2 w-20 rounded-full"/>
                </div>
                </a>
                <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                    <a href="https://www.linkedin.com/in/brian-ogot-9388a8308/">
                    <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/musolinii">
                    <FaGithub />
                    </a>
                    <a href="https://x.com/BwanaOgot?t=1lLNB5nt76ir087oWVOu4A&s=09">
                    <FaSquareXTwitter />
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;