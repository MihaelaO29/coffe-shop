import './About.css';
import img1 from '../../images/img1.webp';
import img3 from '../../images/img3.webp';
import user from '../../images/user.png'
import about_image from '../../images/about.jpg';
import menu1 from '../../images/menu-1.jpg';
import menu2 from '../../images/menu-2.jpg';
import menu3 from '../../images/menu-3.jpg';
import menu4 from '../../images/menu-4.jpg';

function About() {
  return (
    <div className='about_section'>
      <div className='about'
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='about_title'>
          ABOUT US
        </div>
      </div>

      <div className='about_story'>
        <img className='about_image' src={about_image} alt='about_image' />
        <div className='about_background'>
          <div className='story_content'>
            <div className='story_heading'>Discover</div>
            <div className='story_subheading'>OUR STORY</div>
            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came
              from it would have been rewritten a thousand times and everything that was left from
              its origin would be the word "and" and the Little Blind Text should turn around and
              return to its own, safe country. But nothing the copy said could convince her and so
              it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk
              with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
          </div>
        </div>
      </div>
      <div className='testimony_section'
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='testimony_container'>
          <div className='testimony_heading'>Testimony</div>
          <div className='testimony_subheading'>CUSTOMERS SAYS</div>
        </div>
        <div className='testimony_boxes'>
          <div className='box1'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. ”
            <div className='box_content'>
              <img className='user' src={user} alt='user' />
              <p>Anonymous </p>
            </div>
          </div>

          <div className='box2'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.”
            <div className='box_content'>
              <img className='user' src={user} alt='user' />
              <p>Daniel</p>
            </div>
          </div>

          <div className='box3'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco.”
            <div className='box_content'>
              <img className='user' src={user} alt='user' />
              <p>Justin T.</p>
            </div>
          </div>

          <div className='box4'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.”
            <div className='box_content'>
              <img className='user' src={user} alt='user' />
              <p>Louise Kelly</p>
            </div>
          </div>

          <div className='box5'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip.”
            <div className='box_content'>
              <img className='user' src={user} alt='user' />
              <p>Anonymous</p>
            </div>
          </div>

        </div>


</div>
<div className='menu_sample'>
  <div className='menu_sample_details'>
<div className='menu_sample_heading'>Discover</div>
<div className='menu_sample_subheading'>OUR MENU</div>
<div className='text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
   totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
    sunt explicabo.</div>
  </div>
  <div className='menu_sample_images'>
<img className='menu_image' src={menu1} alt='menu1'/>
<img className='menu_image' src={menu2} alt='menu1'/>
<img className='menu_image' src={menu3} alt='menu1'/>
<img className='menu_image' src={menu4} alt='menu1'/>

  </div>
      </div>
    </div>
  );
}

export default About;
