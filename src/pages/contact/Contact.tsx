import Footer from '../../components/footer/footer';
import Navigation from '../../components/navigation/navigation';
import './Contact.css';


function Contact() {
  const handleClick = (e: any) => {
    e?.preventDefault()
  }

  return (
    <div className='contact_section'>
      <Navigation />
      <div className='contact'>
        <div className='contact_heading'>
          CONTACT US
        </div>
      </div>

      <div className='contact_case'>
        <div className='contact_information'>
          <div className='contact_headind_case'>Contact Information</div>
          <div className='contact_adress'>Address: 198 West 21th Street, Suite 721 New York NY 10016</div>
          <div className='contact_adress'>Phone: + 1235 2355 98</div>
          <div className='contact_adress'>Email: info@yoursite.com</div>
          <div className='contact_adress'>Website: yoursite.com</div>
        </div>

        <form className='form'>
          <input className='form_box1' type="text" placeholder="Your Name" />
          <input className='form_box1' type="text" placeholder="Your Email" /><br />
          <input className='form_box2' type="text" placeholder="Subject" /><br />
          <textarea className='form_box3' placeholder="Message" /><br />
          <button className='form_btn' onClick={handleClick}>Send Message</button>
        </form>

      </div>
      <Footer />
    </div>

  );
}

export default Contact;
