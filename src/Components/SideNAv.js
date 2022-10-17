import React from 'react'
import './StylesNav.css'
import {Link} from 'react-router-dom'
export default function SideNav() {
  return (
    <>
    <div className='navHolder'>
    <ul class="nav flex-column">
  <li class="nav-item">
  <Link to='Home' > <a class="nav-link " aria-current="page" href="#">HOME</a></Link>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">About US</a>
  </li>
</ul>
    
    </div>
   
    </>
  )
}
