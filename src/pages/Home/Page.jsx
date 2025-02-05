import GroupChefsImg from "../../assets/images/GroupChefsImg.webp";
import "./styles.css";
import HeaderImg from "../../assets/images/HomePageImage.webp";
import OurMissionImg from "../../assets/images/ourMission.webp";
import ServiceImg1 from "../../assets/images/ServiceImg1.webp";
import ServiceImg2 from "../../assets/images/ServiceImg2.jpg";
import ServiceImg3 from "../../assets/images/ServiceImg3.png";
import FourImagesGroup from "../../components/FourImagesGroup/Component";
import Img1 from "../../assets/images/img1.webp";
import Img2 from "../../assets/images/img2.webp";
import Img3 from "../../assets/images/img3.webp";
import Img4 from "../../assets/images/img4.webp";
import Img5 from "../../assets/images/img5.webp";
import Img6 from "../../assets/images/img6.jpeg";
import Img7 from "../../assets/images/img7.jpeg";
import Img8 from "../../assets/images/img8.jpeg";

const howItWorksSteps = [
  {
    icon: "fa-solid fa-magnifying-glass",
    title: "Create Event",
    description: "Fill out event details.",
  },
  {
    icon: "fa-solid fa-utensils",
    title: "Choose Chef",
    description: "Select a menu that suits your event and taste.",
  },

  {
    icon: "fa-solid fa-share-from-square",
    title: "Send Request",
    description: "Send culinary request to chosen chefs.",
  },
  {
    icon: "fa-solid fa-handshake",
    title: "Receive Chef Offers",
    description: "Receive chef offers for your event.",
  },
  {
    icon: "fa-solid fa-circle-check",
    title: "Confirm Offer",
    description: "Connect with chef and confirm offer and event details.",
  },
  {
    icon: "fa-solid fa-money-bill",
    title: "Pay Deposit",
    description:
      "Secure your booking by paying a 30% deposit directly to the cheif.",
  },
  {
    icon: "fa-solid fa-envelope",
    title: "Send RSVPs",
    description: "Once confirmed by guests, sit back and relax.",
  },
];

function HomePage() {
  // const { t } = useTranslation();

  return (
    <main
      className="HomePage min-h-[80dvh] md:flex md:gap-10 mt-0 p-0"
      id="overlay"
    >
      <section className="playwrite-us-modern py-16 box-border">
        {/* Header Section */}
        <div className="flex md:justify-center items-center md:gap-10 gap-0 my-12 flex-col md:flex-row">
          <div className="flex flex-col items-start w-[80%] md:w-[62%] justify-center space-y-10">
            <p className="mx-2 text-center self-center text-2xl md:text-3xl lg:text-4xl font-bold">
              Where <div className="mb-2" />
              <span className="text-main-color">
                Exquisite Taste and Talent
              </span>
              <div className="mb-2" />
              Meet Experience
            </p>
            <p className="playwrite-us-modern text-sm md:text-lg lg:text-xl text-justify leading-10 mx-2 px-5">
              Connect with top chefs, explore diverse cuisines, enjoy
              personalized culinary experiences and enjoy gourmet meals. Whether
              it’s a private or social event we bring the best to your table.
            </p>
          </div>
          <div className="md:w-[32%] max-w-full content-end m-0">
            <img
              className="max-w-[80%] hidden md:block shadow-md shadow-main-color rounded-xl"
              src={HeaderImg}
              alt="ChefImg"
            />
            <img
              className="max-w-[80%] md:hidden block m-auto"
              src={GroupChefsImg}
              alt="GroupChefImg"
            />
          </div>
        </div>

        {/* Our Mission */}
        <div className="flex md:justify-center items-center md:gap-10 gap-0 py-14 lg:px-5 my-12 flex-col md:flex-row border-t-2 border-main-color">
          <div className="md:w-[32%] max-w-full content-end m-0">
            <img
              className="max-w-[80%] hidden md:block shadow-md shadow-main-color rounded-xl"
              src={OurMissionImg}
              alt="ChefImg"
            />
          </div>
          <div className="flex flex-col items-start w-[80%] md:w-[62%] justify-center space-y-10">
            <p className="mx-2 text-center text-2xl md:text-3xl lg:text-4xl font-bold">
              <span className="text-main-color">Our Culinary Mission</span>
            </p>
            <p className="playwrite-us-modern text-sm md:text-lg lg:text-xl text-justify leading-5 mx-2 px-5">
              <span className="text-main-color">About Us: </span>We bridge the
              gap between culinary enthusiasts and talented chefs, creating a
              space where culinary creativity thrives.
              <div className="mb-4" />
              <span className="text-main-color">Mission: </span>We are committed
              to delivering exceptional food experiences, fostering community
              engagement, and driving innovation in the culinary world.
            </p>
          </div>
        </div>

        {/* Our Services */}
        <div className="flex flex-col items-center md:justify-center md:gap-10 gap-6 py-14 my-12 border-t-2 border-main-color">
          {/* Text Section */}
          <div className="flex flex-col items-center w-[90%] md:w-[80%] text-center space-y-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold md:self-start">
              <span className="text-main-color">Our Culinary Services</span>
            </p>
            <p className="playwrite-us-modern text-sm md:text-lg lg:text-xl">
              Discover a world of culinary delights with our exclusive services.
              Whether you’re looking to host a private event with a personal
              chef, enjoy Gourmet meals delivered to your door, or want a full
              catering service, we have something for every foodie. Our platform
              connects you with professional chefs who bring diverse cuisines
              and unique experiences.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-20  gap-6 justify-center">
            <div className="flex flex-col items-center">
              <img
                className="object-cover w-56 h-56 rounded-xl"
                src={ServiceImg1}
                alt="ChefImg"
              />
              <div className="border-2 rounded-3xl w-56 py-4 px-4 mt-4 text-center">
                <h2 className="text-lg font-bold">Order Gourmet Meals</h2>
                <p className="text-xs leading-5 px-2 mt-2 text-left">
                  Savor exceptional, ready-to-eat meals crafted by top chefs.
                  Choose from a wide range of dishes.
                </p>
                <button className="mt-3 bg-transparent text-lg border-2 border-x-main-color border-y-gray-500 px-2 py-1">
                  Explore
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="object-cover w-56 h-56 rounded-xl"
                src={ServiceImg2}
                alt="ChefImg"
              />
              <div className="border-2 rounded-3xl w-56 py-2 px-4 mt-4">
                <h2 className="text-lg font-bold">
                  Private Chef Booking Experience
                </h2>
                <div className="mb-4" />
                <p className="text-xs leading-5 px-4 text-left">
                  Book top-tier pro chefs for unique private or public events.
                </p>
                <div className="mb-10" />
                <button className="bg-transparent text-lg border-2 border-x-main-color border-y-gray-500 px-2 py-1">
                  Meet Chefs
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="object-cover w-56 h-56 rounded-xl"
                src={ServiceImg3}
                alt="ChefImg"
              />
              <div className="border-2 rounded-3xl w-56 py-2 px-4 mt-4">
                <h2 className="text-lg font-bold">
                  Exquisite Catering for Every Occasion
                </h2>
                <div className="mb-2" />
                <p className="text-xs leading-5 px-4 text-left">
                  Our chefs provide full catering, delivering a gourmet
                  experience that impresses guests.
                </p>
                <div className="mb-6" />
                <button className="bg-transparent text-lg border-2 border-x-main-color border-y-gray-500 px-2 py-1">
                  Host Event
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* How It works */}
        <div className="flex flex-col space-y-10 min-h-52 border-t-2 border-main-color py-12 mx-6">
          <h2 className="font-bold text-center text-white text-2xl sm:text-3xl lg:text-4xl">
            How It Works:{" "}
            <span className="text-main-color">Host Your Event</span> With Ease
          </h2>
          <div className="flex flex-col sm:flex-row justify-around items-center flex-wrap gap-8 sm:gap-10">
            {howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 max-w-full sm:max-w-32"
              >
                <i className={`${step.icon} text-main-color`} />
                <h2 className="text-sm font-bold">{step.title}</h2>
                <p className="text-xs text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Community */}
        <div className="flex flex-col items-center justify-center px-4 md:px-10 lg:px-14 border-t-2 border-main-color">
          {/* Top Image Group */}
          <FourImagesGroup
            className="self-center md:self-start md:ml-10 lg:ml-20 lg:top-32"
            img1={Img1}
            img2={Img2}
            img3={Img3}
            img4={Img4}
          />

          {/* Heading */}
          <h2 className="text-center text-main-color text-2xl md:text-3xl lg:text-4xl font-bold mt-10">
            Join Our Community
          </h2>

          {/* Description */}
          <p className="max-w-[90%] md:max-w-[70%] lg:max-w-[50%] playwrite-us-modern text-sm md:text-lg lg:text-xl text-center leading-6 mt-3">
            Showcase your talent, connect with food lovers, and grow your
            culinary career. Sign up now to become part of our exclusive
            network!
          </p>

          {/* Button */}
          <button className="mt-5 bg-transparent text-lg border-2 border-main-color px-4 py-2 rounded-md hover:bg-main-color hover:text-white transition-all duration-300">
            Join as Chef
          </button>

          {/* Bottom Image Group */}
          <FourImagesGroup
            className="self-center md:self-end md:right-20 md:bottom-20 md:mr-10 lg:mr-14 mt-10 lg:-mt-10"
            img1={Img5}
            img2={Img6}
            img3={Img7}
            img4={Img8}
          />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
