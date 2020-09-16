import React, {useState, useEffect} from 'react';
import { menuItems } from './navItems'
import { Link} from "react-router-dom";

export default function Navbar() {
console.log('navbar')
  return(
    <nav className='navbar'>
      <div>
        <ul>
          {menuItems.map(item =>{
            return (
              <li>
                <Link className={item.class} to={ item.url.replace(/\s/g, '') }>
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
    );
}