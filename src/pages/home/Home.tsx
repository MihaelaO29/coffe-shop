import './Home.css';
import { useEffect, useState } from 'react';
import img1 from '../../images/img1.webp';
import img2 from '../../images/img2.webp';
import img3 from '../../images/img3.webp';


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
    <div className='app'>
      <div className='shop'
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </div>
      <div className='shop_title'>
        <p className='title'>Welcome</p>
        <p className='subtitle'>THE BEST COFFEE TESTING EXPERIENCE</p>
      </div>
    </div>

  );
}

export default Home;
