import React from 'react'
import './StylesNav.css'
import {Link} from 'react-router-dom'
export default function SideNav() {
  return (
    <>
    <div className='navHolder'>
    <ul class="nav flex-column">
  <li class="nav-item">
  <Link class="nav-link " aria-current="page" to="/">HOME</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/contact">Contact</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/aboutUS">About US</Link>
  </li>
</ul>
    
    </div>
   
    </>
  )
}
