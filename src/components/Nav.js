import { NavLink } from 'react-router-dom';
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
      <div className="navbar-menu">  {/* Link태그는 스타일 주기어려움, NavLink 로 바꾸어 css를 이용해 간단하게 스타일을 줌 */}
          <div className='navbar-menu-home'> 
            <li><NavLink to = '/'><h2><IoHomeSharp /></h2></NavLink></li>
             <li><div className='navbar-menu-home-text'><NavLink to = '/'>home</NavLink></div></li>
          </div>

           <div className='navbar-menu-learning'>
            <li><NavLink to= '/learning'><h2><FaPencilAlt /></h2></NavLink></li>
             <li><div className='navbar-menu-learning-text'><NavLink to= '/learning'>learning</NavLink></div></li>
          </div>

          <div className='navbar-menu-project'>
            <li><NavLink to= '/project'><h2><MdFactCheck /></h2></NavLink></li>
             <li><div className='navbar-menu-project-text'><NavLink to= '/project'>Project</NavLink></div></li>  
          </div>

          <div className='navbar-menu-contact'>
            <li><NavLink to= '/contact'><h2><IoMdContact /></h2></NavLink></li>
             <li><div className='navbar-menu-contact-text'><NavLink to= '/contact'>contact</NavLink></div></li>
          </div>

      </div>
        
    </div>
)
}

export default Navbar;