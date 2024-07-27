import { Link } from "react-router-dom";
import React from 'react';
function Nav(){
    return(
        <>
        <Link to="/home">Home</Link>
        <Link to="/addcategory">AddCategory</Link>
        <Link to="/category">Category</Link>
        </>
    )
}

export default Nav;