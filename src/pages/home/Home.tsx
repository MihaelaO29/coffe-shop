import './Home.css';
import { useEffect, useState } from 'react';
import img1 from '../../images/img1.webp';
import img2 from '../../images/img2.webp';
import img3 from '../../images/img3.webp';
import Navigation from '../../components/navigation/navigation';
import Footer from '../../components/footer/footer';


function Home() {
  const images = [img1, img2, img3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='home'>
      <Navigation />
      <div className='home_section'
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#0000004d'
        }}
      >
        <div className='home_title'>
          <div className='title'>Welcome</div>
          <div className='subtitle'>THE BEST COFFEE TESTING EXPERIENCE</div>
        </div>
      </div>

      <Footer />
    </div>

  );
}

export default Home;
