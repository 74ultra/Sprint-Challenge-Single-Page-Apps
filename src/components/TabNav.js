import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";



const panes = [
    { menuItem: 'Home', render: () => <NavLink to="/"><Tab.Pane></Tab.Pane></NavLink> },
    { menuItem: 'Characters', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Locations', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Episodes', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> }
  ]
  
  const TabNav = () => <Tab panes={panes} />
  
  export default TabNav;
  



/*
// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
    return (
        <div className='navBar'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/characters">Characters</NavLink>
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/episodes">Episodes</NavLink>
        </div>
    )
};

*/