import { Link } from "react-router-dom";
import style from './NavBar.module.css'
import SearchBar from "../SearchBar/SearchBar";
import React from "react";


const NavBar = (props) => {
    return (
        <div className={style.mainContainer}>
            <Link to="/home">HOME</Link>
            <Link to="/create">FORM</Link>
        <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}

export default NavBar;