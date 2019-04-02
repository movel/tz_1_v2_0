import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  
}

const Menu: React.FC<Props> = () => {          
    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact>HOME</NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
              >
                LOGIN
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">PROFILE</NavLink>
            </li>
            <li>
              <NavLink to="/news">NEWS</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

export { Menu };