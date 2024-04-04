import '../styles/Home.css';
import { IoMdContact } from "react-icons/io";
import { MdCake } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


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

        <div id='guest-book'>
            <div className='guest-book-title'>
            <h2>☆.｡･:･ﾟ:* Guest Book *:･ﾟ:･｡.☆</h2>
            </div>
            <div className='guest-form'>
                <div className='division'/>
                <p><input id='namebox' type='text' placeholder='Name'/></p>  {/* placeholder(가상요소에 속함) : input 안에 힌트주기 */}         
                <div className='division'/>
                <p><textarea id='contentsbox' type='text' placeholder='Contents'/></p>      
                <div className='division'/>
            </div>

            <div className='guest-button'>
                <button onClick={()=>alert('방명록이 등록되었습니다. ପ( •̤ᴗ•̤ )੭⁾⁾.｡.:✽・ﾟ＋')}>write</button> {/* alert만 사용하면 렌더링 될 때 작동이되어서 콜백함수를 넣음으로써 버튼 클릭 시 작동 되게 함 */}
            </div>

            <div className='guest-view'>

            </div>
            
        </div>
        </>
    ) 

}
export default Home;