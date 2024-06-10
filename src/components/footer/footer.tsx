import './footer.css';
import twitter from '../../images/twitter.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import coffe_img from '../../images/coffe_img.jpg';
import cake from '../../images/cake_img.jpg';
import calendar from '../../images/calendar.png';
import user_media from '../../images/user_media.png';


function Footer() {
    return (
        <div className='footer_section'>
            <div className='about'>
                <div className='social_media'>
                    <div className='footer_title'>ABOUT US</div>
                    <div className='social_media_details'>
                        <div className='media_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                        </div>
                        <div className='social_media_logo'>
                            <img className='media_logo' src={twitter} alt='twitter' />
                            <img className='media_logo' src={facebook} alt='facebook' />
                            <img className='media_logo' src={instagram} alt='instagram' />
                        </div>
                    </div>
                </div>

                <div className='blog'>
                    <div className='footer_title'>RECENT BLOG</div>
                    <div className='social_media_details'>
                        <div className='media_content'>
                            <img className='media_img' src={coffe_img} alt='coffe_img' />
                            <div className='media_date_text'>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                                <div className='media_date'>
                                    <div className='media_date_details'>
                                        <img className='media_date_img' src={calendar} alt='calendar' />
                                        <div>Sept 15, 2018</div>
                                    </div>

                                    <div className='media_date_details'>
                                        <img className='media_date_img' src={user_media} alt='user' />
                                        <div>Admin</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>


                            <div className='media_content'>
                                <img className='media_img' src={cake} alt='cake' />
                                <div className='media_date_text'>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                                    <div className='media_date'>
                                        <div className='media_date_details'>
                                            <img className='media_date_img' src={calendar} alt='calendar' />
                                            <div>Sept 15, 2018</div>
                                        </div>

                                        <div className='media_date_details'>
                                            <img className='media_date_img' src={user_media} alt='user' />
                                            <div>Admin</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='services_resume'>
                    <div className='footer_title' >SERVICES</div>
                    <div className='social_media_details'>
                        <div className='services_options'>
                            <div>Cooked</div>
                            <div>Deliver</div>
                            <div>Quality Foods</div>
                            <div>Mixed</div>
                        </div>
                    </div>
                </div>

                <div className='contact_resume'>
                    <div className='footer_title'>HAVE A QUESTIONS?</div>
                    <div className='social_media_details'>
                        <div className='contact_details'>
                            <div>203 Fake St. Mountain View, San Francisco, California, USA</div>
                            <div>+2 392 3929 210</div>
                            <div>info@yourdomain.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer; 