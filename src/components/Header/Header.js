import { NavLink } from 'react-router-dom';

import './Header.css';

function Header(){
    return (
        <div className="header">
            <nav className="navbar">
                <ul>
                    <NavLink to="/Home">
                        <li>Home</li>
                    </NavLink>

                    <NavLink to="/Projects">
                         <li>Projects</li>
                    </NavLink>

                    <NavLink to="/Contacts">
                        <li>Contacts</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
