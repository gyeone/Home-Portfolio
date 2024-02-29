import '../styles/Contact.css';

function Contact() {
    return(
        <div className='contact'>
            <div className="contact-blog">
                <img style={{ width: 100, height: 100, margin: 30}} src={require("../assets/images/naverblog.png")} alt="naverblog"></img>
            </div>

            <div className='contact-github'>
                <img style={{ width: 100, height: 100, margin: 30}} src={require("../assets/images/github.png")} alt="github"></img>
            </div>
        </div>
    )
}
export default Contact;