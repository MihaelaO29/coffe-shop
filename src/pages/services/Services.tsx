import './Services.css';
import easy from '../../images/easy.png';
import fast from '../../images/fast.png';
import beans from '../../images/beans.png';
import Navigation from '../../components/navigation/navigation';
import Footer from '../../components/footer/footer';


function Services() {
  return (
    <div className='services_section'>
      <Navigation />
      <div className='services'>
        <div className='services_heading'>
          SERVICES
        </div>
      </div>
      <div>

        <div className='services_details'>
          <div className='all_services'>
            <div className='service_content'>
              <div className='image_box'>
                <img src={easy} alt='easy' />
              </div>
              <div className='services_details_heading'>EASY TO ORDER</div>
              <div className='services_details_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
              </div>
            </div>

            <div className='service_content'>
              <div className='image_box'>
                <img src={fast} alt='fast' />
              </div>
              <div className='services_details_heading'>FASTEST DELIVERY</div>
              <div className='services_details_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
              </div>
            </div>

            <div className='service_content'>
              <div className='image_box'>
                <img src={beans} alt='beans' />
              </div>
              <div className='services_details_heading'>QUALITY COFFEE</div>
              <div className='services_details_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
