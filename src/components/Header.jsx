import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header >
    <div className='container'>
        <div className='row'>
        <nav className="navbar navbar-expand-lg ">
<div className="container-fluid">
<Link className="navbar-brand " href="#"><img src="https://careerengine.in/wp-content/uploads/2023/02/logo.png" alt="" className='logo' /></Link>
 
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-">
    <li className="nav-item">
      <Link className="nav-link  active" aria-current="page" href="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" href="/aboutus">CAREER ENGINE APP</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link " href="/products">TIMELINE</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link " href="/help">COURSES</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link " aria-current="page" href="#">ALUMNI</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link " href="#">REGISTER</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link " href="#">CONTACT US</Link>
    </li>
   
   
  </ul>


  <ul className="navbar-nav  mb-2 mb-lg-0">

  </ul>


</div>



</div>
</nav>
        </div>
    </div>



  
</header>
  )
}

export default Header