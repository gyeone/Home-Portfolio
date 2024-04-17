import '../styles/Home.css';
import { IoMdContact } from "react-icons/io";
import { MdCake } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import GuestBook_list from '../components/GuestBook_list';
import GuestBook_post from '../components/GuestBook_post';


function Home() {


    return(
        <>
        <div className="home-title">
            <h1> Design & Developer </h1>
            <h1> Portfolio </h1>
    
        </div>

        <div className='home-userinfo'>
            <div className='home-userinfo-name'><IoMdContact /><b>Name</b> : 백기연</div>   
            <div className='home-userinfo-birth'><MdCake /><b>Birth</b> : 2001.11.30</div>
            <div className='home-userinfo-address'><FaLocationDot /><b>Address</b> : 경남 양산시</div>
            <div className='home-userinfo-github'><IoLogoGithub /><b>GitHub</b> : gyeone</div>
            <div className='home-userinfo-email'><MdEmail /><b>E-mail</b> : gyeone@fecsen.com</div>
        </div>

        <div id='guestbook'>
            <div className='guestbook-title'>
                <h2>☆.｡･:･ﾟ:* Guest Book *:･ﾟ:･｡.☆</h2>
            </div>
                <GuestBook_post/>
            <div className='guest-view'>
                <GuestBook_list/>
            </div>
            
        </div>
        </>
    ) 

}
export default Home;