import "./styles.css";
import Navbar from "../../components/Navbar/Navbar";
import HeaderImg from "../../assets/images/HeaderImg.png";
import Footer from "../../components/Footer/Footer";
import CallToAction from "../../components/CallToAction/CallToAction";
import ChefTemp from "../../assets/images/chef-temp.png";

function HomePage() {
  return (
    <div>
      <Navbar />

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1>
            Explore <span className="highlight">top</span> chefs, book
            <span className="highlight"> personalized</span> dining events, and
            create <span className="highlight">unforgettable</span> experiences.
          </h1>
          <CallToAction title="Get Started" />
        </div>
        <img src={HeaderImg} alt="img" className="img" />
      </header>

      {/* How It Works Section */}
      <div className="how-it-works">
        <h1>How It Works</h1>
        <div>
          <img src={HeaderImg} alt="img" />
          <h3>Personalize your events1</h3>
          <p>
            Fill in your event details, date, time, and location. Create event.
          </p>
          <CallToAction title="Create Event" />
        </div>
        <div>
          <img src={HeaderImg} alt="img" />
          <h3>Personalize your events2</h3>
          <p>
            Fill in your event details, date, time, and location. Create event.
          </p>
          <CallToAction title="Create Event" />
        </div>
        <div>
          <img src={HeaderImg} alt="img" />
          <h3>Personalize your events3</h3>
          <p>
            Fill in your event details, date, time, and location. Create event.
          </p>
          <CallToAction title="Create Event" />
        </div>
        <div>
          <img src={HeaderImg} alt="img" />
          <h3>Personalize your events4</h3>
          <p>
            Fill in your event details, date, time, and location. Create event.
          </p>
          <CallToAction title="Create Event" />
        </div>
        <div>
          <img src={HeaderImg} alt="img" />
          <h3>Personalize your events5</h3>
          <p>
            Fill in your event details, date, time, and location. Create event.
          </p>
          <CallToAction title="Create Event" />
        </div>
        <div>
          <img src={HeaderImg} alt="img" />
          <h3>Personalize your events6</h3>
          <p>
            Fill in your event details, date, time, and location. Create event.
          </p>
          <CallToAction title="Create Event" />
        </div>
      </div>

      {/* Chefs Section */}
      <div className="chefs-section">
        <div>
          <h1>Meet our Chefs</h1>
          <div>Search</div>
        </div>
        <div className="content">
          <div className="chef">
            <img src={ChefTemp} alt="img" />
            <h3>John Doe</h3>
          </div>
          <div className="chef">
            <img src={ChefTemp} alt="img" />
            <h3>John Doe</h3>
          </div>
          <div className="chef">
            <img src={ChefTemp} alt="img" />
            <h3>John Doe</h3>
          </div>
          <div className="chef">
            <img src={ChefTemp} alt="img" />
            <h3>John Doe</h3>
          </div>
          <div className="chef">
            <img src={ChefTemp} alt="img" />
            <h3>John Doe</h3>
          </div>
          <div className="chef">
            <img src={ChefTemp} alt="img" />
            <h3>John Doe</h3>
          </div>
          <div className="chef">
            <img src={ChefTemp} alt="img" />
            <h3>John Doe</h3>
          </div>
          <div className="chef">
            <img src={ChefTemp} alt="img" />
            <h3>John Doe</h3>
          </div>
          <div className="chef">
            <img src={ChefTemp} alt="img" />
            <h3>John Doe</h3>
          </div>
          <div className="chef">
            <img src={ChefTemp} alt="img" />
            <h3>John Doe</h3>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
