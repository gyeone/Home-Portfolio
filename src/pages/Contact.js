import '../styles/Contact.css';
import GitHubCalendar from 'react-github-calendar';

function Contact() {
    return(
        <div className='contact'>
            <div className="contact-blog">
                    <div id='blog-icon'>
                            <a href='https://blog.naver.com/voov000' target='_blank'>
                                <img style={{ width: 100, height: 100 }} src={require("../assets/images/naverblog.png")} alt="naverblog"/>
                            </a>
                    </div>
            </div>

            <div className='contact-github'>
                <a href='https://github.com/gyeone' target='_blank'>
                    <img id='github-icon' style={{ width: 100, height: 100, margin: 30 }} src={require("../assets/images/github.png")} alt="github"/>
                </a>
                    <GitHubCalendar 
                    username="gyeone"
                    showWeekdayLabels/>
            </div>
        </div>
    )
}
export default Contact;