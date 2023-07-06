import React from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
        <h1>Portfolio</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#social media"}>Social Media</HashLink>
            <HashLink to={"/#skills"}>Skills</HashLink>
            <HashLink to={"/#projects"}>Projects</HashLink>
            <Link to={"/internship"}>Internship</Link>
            <Link to={"/contact"}>Contact</Link>
        </main>
    </nav>
  );
}
 
export default Header