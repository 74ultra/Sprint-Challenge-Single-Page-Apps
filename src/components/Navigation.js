import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <div className='navBar'>
            
            <NavLink className='navItem' aria-current="true" to="/">Home</NavLink>
            <NavLink className='navItem' to="/characters">Characters</NavLink>
            <NavLink className='navItem' to="/locations">Locations</NavLink>
            <NavLink className='navItem' to="/episodes">Episodes</NavLink>
        </div>
    )
};