import { Link } from 'react-router-dom';
import '../App.css';
import { IoHomeSharp } from "react-icons/io5";

function Navbar() {
return(
    <div className="navbar">
        <div className="navbar-logo">
            <h2>gi yeon's portfolio</h2>
        </div>
      <div className="navbar-menu">
        <li><Link to = '/'><h1><IoHomeSharp /></h1>Home</Link></li>
        <li><Link to= '/learning'>learning</Link></li>
        <li><Link to= '/project'>Project</Link></li>  
        <li><Link to= '/contact'>contact</Link></li>
      </div>
        
    </div>
)
}

export default Navbar;