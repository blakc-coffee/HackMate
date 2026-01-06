
import './NavBar.css'
import { Link } from 'react-router'

export  function NavBar(){
    return(
        <>
         <nav className="navbar">
        <div className="logo">
            <Link to="/" className="nav-btn" >HackMate </Link>
        </div>
        
        <div className="nav-actions">
          
            <Link to="/my-profile" className="nav-link">👤 My Profiles</Link>
            <Link to="/create-profile" className="nav-btn">+ Create Profile</Link>
        </div>
    </nav>
        </>
    )
}