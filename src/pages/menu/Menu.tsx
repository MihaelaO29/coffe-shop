import './Menu.css';
import { useState } from 'react';
import food1 from '../../images/food1.png';
import food2 from '../../images/food2.png';
import food3 from '../../images/food3.png';
import food4 from '../../images/food4.png';
import food5 from '../../images/food5.png';
import food6 from '../../images/food6.png';
import drink1 from '../../images/drink1.png';
import drink2 from '../../images/drink2.png';
import drink3 from '../../images/drink3.png';
import drink4 from '../../images/drink4.png';
import drink5 from '../../images/drink5.png';
import drink6 from '../../images/drink6.png';
import dessert1 from '../../images/dessert1.png';
import dessert2 from '../../images/dessert2.png';
import dessert3 from '../../images/dessert3.png';
import dessert4 from '../../images/dessert4.png';
import dessert5 from '../../images/dessert5.png';
import dessert6 from '../../images/dessert6.png';
import Navigation from '../../components/navigation/navigation';
import Footer from '../../components/footer/footer';


function Menu() {
  const [category, showCategory] = useState('main');

  const handleShowMain = () => {
    showCategory('main')
  }

  const handleShowDrinks = () => {
    showCategory('drinks')
  }

  const handleShowDesserts = () => {
    showCategory('desserts')
  }

  return (
    <div className='menu_section'>
      <Navigation />
      <div className='menu'>
        <div className='menu_heading'>
          OUR MENU
        </div>
      </div>
      <div className='menu_presentation'>
        <div className='heading_menu_presentation'>
          Discover
        </div>
        <div className='subheading_menu_presentation'>
          OUR PRODUCTS
        </div>

        <div className='menu_category'>
          <div onClick={handleShowMain} className={category === 'main' ? ('active') : ('inactive')}>Main Dish</div>
          <div onClick={handleShowDrinks} className={category === 'drinks' ? ('active') : ('inactive')}>Drinks</div>
          <div onClick={handleShowDesserts} className={category === 'desserts' ? ('active') : ('inactive')}>Desserts</div>
        </div>

        {category === 'main' ? (
          <div className='food_details'>
            <div className='food_menu'>
              <img className='food_image' src={food1} alt='food1' />
              <div className='food_name'>GRILLED BEEF</div>
              <div className='price'>$2.90</div>
              <button className='button_add_cart'>Add to cart</button>
            </div>
            <div className='food_menu'>
              <img className='food_image' src={food2} alt='food2' />
              <div className='food_name'>GRILLED BEEF</div>
              <div className='price'>$2.90</div>
              <button className='button_add_cart'>Add to cart</button>
            </div>
            <div className='food_menu'>
              <img className='food_image' src={food3} alt='food3' />
              <div className='food_name'>GRILLED BEEF</div>
              <div className='price'>$2.90</div>
              <button className='button_add_cart'>Add to cart</button>
            </div>
            <div className='food_menu'>
              <img className='food_image' src={food4} alt='food4' />
              <div className='food_name'>GRILLED BEEF</div>
              <div className='price'>$2.90</div>
              <button className='button_add_cart'>Add to cart</button>
            </div>
            <div className='food_menu'>
              <img className='food_image' src={food5} alt='food5' />
              <div className='food_name'>GRILLED BEEF</div>
              <div className='price'>$2.90</div>
              <button className='button_add_cart'>Add to cart</button>
            </div>
            <div className='food_menu'>
              <img className='food_image' src={food6} alt='food6' />
              <div className='food_name'>GRILLED BEEF</div>
              <div className='price'>$2.90</div>
              <button className='button_add_cart'>Add to cart</button>
            </div>
          </div>) : ('')}

        {category === 'drinks' ? (
          <div className='drink_details'>
            <div className='drink_menu'>
              <img className='drink_image' src={drink1} alt='drink1' />
              <div className='food_name'>LEMONADE JUICE</div>
              <div className='price'>$2.90</div>
              <button className='button_add_cart'>Add to cart</button>
            </div>
            <div className='drink_menu'>
              <img className='drink_image' src={drink2} alt='drink2' />
              <div className='drink_name'>LEMONADE JUICE</div>
              <div className='price'>$2.90</div>
              <button className='button_add_cart'>Add to cart</button>
            </div>
            <div className='drink_menu'>
              <img className='drink_image' src={drink3} alt='drink3' />
              <div className='drink_name'>LEMONADE JUICE</div>
              <div className='price'>$2.90</div>
              <button className='button_add_cart'>Add to cart</button>
            </div>
            <div className='drink_menu'>
              <img className='drink_image' src={drink4} alt='drink4' />
              <div className='drink_name'>LEMONADE JUICEF</div>
              <div className='price'>$2.90</div>
              <button className='button_add_cart'>Add to cart</button>
            </div>
            <div className='drink_menu'>
              <img className='drink_image' src={drink5} alt='drink5' />
              <div className='drink_name'>LEMONADE JUICE</div>
              <div className='price'>$2.90</div>
              <button className='button_add_cart'>Add to cart</button>
            </div>
            <div className='drink_menu'>
              <img className='drink_image' src={drink6} alt='drink6' />
              <div className='drink_name'>LEMONADE JUICE</div>
              <div className='price'>$2.90</div>
              <button className='button_add_cart'>Add to cart</button>
            </div>
          </div>
        ) : ('')}

        {category === 'desserts' ? (
          <div className='dessert_details'>
            <div className='dessert_menu'>
              <img className='dessert_image' src={dessert1} alt='dessert1' />
              <div className='dessert_name'>HOT CAKE HONEY</div>
              <div className='price'>$2.90</div>
              <button className='button_add_cart'>Add to cart</button>
            </div>
            <div className='dessert_menu'>
              <img className='dessert_image' src={dessert2} alt='dessert2' />
              <div className='dessert_name'>HOT CAKE HONEY</div>
              <div className='price'>$2.90</div>
              <button className='button_add_cart'>Add to cart</button>
            </div>
            <div className='dessert_menu'>
              <img className='dessert_image' src={dessert3} alt='dessert3' />
              <div className='dessert_name'>HOT CAKE HONEY</div>
              <div className='price'>$2.90</div>
              <button className='button_add_cart'>HOT CAKE HONEY</button>
            </div>
            <div className='dessert_menu'>
              <img className='dessert_image' src={dessert4} alt='dessert4' />
              <div className='dessert_name'>HOT CAKE HONEY</div>
              <div className='price'>$2.90</div>
              <button className='button_add_cart'>Add to cart</button>
            </div>
            <div className='dessert_menu'>
              <img className='dessert_image' src={dessert5} alt='dessert5' />
              <div className='dessert_name'>HOT CAKE HONEY</div>
              <div className='price'>$2.90</div>
              <button className='button_add_cart'>Add to cart</button>
            </div>
            <div className='dessert_menu'>
              <img className='dessert_image' src={dessert6} alt='dessert6' />
              <div className='dessert_name'>HOT CAKE HONEY</div>
              <div className='price'>$2.90</div>
              <button className='button_add_cart'>Add to cart</button>
            </div>
          </div>) : ('')}
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
