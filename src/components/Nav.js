import { Link } from 'react-router-dom';
import '../styles/Nav.css';
import { IoHomeSharp } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { MdFactCheck } from "react-icons/md";
import { IoMdContact } from "react-icons/io";


function Navbar() {
return(
    <div className="navbar">
        <div className="navbar-logo">
            <h2>gi yeon's portfolio</h2>
        </div>
      <div className="navbar-menu">
          <div className='navbar-menu-home'>
            <li><Link to = '/'><h2><IoHomeSharp /></h2></Link></li>
             <li><Link to = '/'>home</Link></li>
          </div>

           <div className='navbar-menu-learning'>
            <li><Link to= '/learning'><h2><FaPencilAlt /></h2></Link></li>
             <li><Link to= '/learning'>learning</Link></li>
          </div>

          <div className='navbar-menu-project'>
            <li><Link to= '/project'><h2><MdFactCheck /></h2></Link></li>
             <li><Link to= '/project'>Project</Link></li>  
          </div>

          <div className='navbar-menu-contact'>
            <li><Link to= '/contact'><h2><IoMdContact /></h2></Link></li>
             <li><Link to= '/contact'>contact</Link></li>
          </div>

      </div>
        
    </div>
)
}

export default Navbar;