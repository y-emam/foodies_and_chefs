import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeaderImg from './assets/images/HeaderImg.png';
import Footer from './components/Footer/Footer';
import CallToAction from './components/CallToAction/CallToAction';
import ChefTemp from './assets/images/chef-temp.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className='header'>
        <div className='header-content'>
          <p>Explore top chefs, book personalized dining events, and
            create unforgettable experiences.</p>
          <CallToAction title='Get Started' />
        </div>
        <img src={HeaderImg} alt='img' className='img' />
      </header>

      <div className='how-it-works'>
        <h1>How It Works</h1>
        <div>
          <img src={HeaderImg} alt='img' />
          <h3>Personalize your events1</h3>
          <p>Fill in your event details, date, time, and location. Create event.</p>
          <CallToAction title='Create Event' />
        </div>
        <div>
          <img src={HeaderImg} alt='img' />
          <h3>Personalize your events2</h3>
          <p>Fill in your event details, date, time, and location. Create event.</p>
          <CallToAction title='Create Event' />
        </div>
        <div>
          <img src={HeaderImg} alt='img' />
          <h3>Personalize your events3</h3>
          <p>Fill in your event details, date, time, and location. Create event.</p>
          <CallToAction title='Create Event' />
        </div>
        <div>
          <img src={HeaderImg} alt='img' />
          <h3>Personalize your events4</h3>
          <p>Fill in your event details, date, time, and location. Create event.</p>
          <CallToAction title='Create Event' />
        </div>
        <div>
          <img src={HeaderImg} alt='img' />
          <h3>Personalize your events5</h3>
          <p>Fill in your event details, date, time, and location. Create event.</p>
          <CallToAction title='Create Event' />
        </div>
        <div>
          <img src={HeaderImg} alt='img' />
          <h3>Personalize your events6</h3>
          <p>Fill in your event details, date, time, and location. Create event.</p>
          <CallToAction title='Create Event' />
        </div>
      </div>
      <div className='chefs-section'>
        <div>
          <h1>Meet our Chefs</h1>
          <div>Search</div>
        </div>
        <div className='content'>
          <div className='chef'>
            <img src={ChefTemp} alt='img' />
            <h3>John Doe</h3>
          </div>
          <div className='chef'>
            <img src={ChefTemp} alt='img' />
            <h3>John Doe</h3>
          </div>
          <div className='chef'>
            <img src={ChefTemp} alt='img' />
            <h3>John Doe</h3>
          </div>
          <div className='chef'>
            <img src={ChefTemp} alt='img' />
            <h3>John Doe</h3>
          </div>
          <div className='chef'>
            <img src={ChefTemp} alt='img' />
            <h3>John Doe</h3>
          </div>
          <div className='chef'>
            <img src={ChefTemp} alt='img' />
            <h3>John Doe</h3>
          </div>
          <div className='chef'>
            <img src={ChefTemp} alt='img' />
            <h3>John Doe</h3>
          </div>
          <div className='chef'>
            <img src={ChefTemp} alt='img' />
            <h3>John Doe</h3>
          </div>
          <div className='chef'>
            <img src={ChefTemp} alt='img' />
            <h3>John Doe</h3>
          </div>
          <div className='chef'>
            <img src={ChefTemp} alt='img' />
            <h3>John Doe</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
