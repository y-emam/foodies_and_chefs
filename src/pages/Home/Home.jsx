import ChefImg from "../../assets/images/HomeChefImg.webp";
import GroupChefsImg from "../../assets/images/GroupChefsImg.webp";
import LogoImg from "../../assets/images/logo.webp";
// import ChefSlider from "../../components/ChefSlider/Component";
// import ChefTempImg from "../../assets/images/chefTemp.webp";
import "./stylesHome.css";
// import { useState } from "react";

// const chefs = [
//   { name: "Ahmed Hassan", location: "Alexandria, Egypt", image: ChefTempImg },
//   { name: "Fatima Mahmoud", location: "Giza, Egypt", image: ChefTempImg },
//   { name: "Omar Abdelrahman", location: "Luxor, Egypt", image: ChefTempImg },
//   { name: "Sara Adel", location: "Aswan, Egypt", image: ChefTempImg },
//   { name: "Nour Ebrahim", location: "Hurghada, Egypt", image: ChefTempImg },
//   { name: "Layla Mostafa", location: "Mansoura, Egypt", image: ChefTempImg },
//   { name: "Hassan Alaa", location: "Port Said, Egypt", image: ChefTempImg },
//   { name: "Reem Khalil", location: "Ismailia, Egypt", image: ChefTempImg },
//   { name: "Yasser Emam", location: "Cairo, Egypt", image: ChefTempImg },
//   { name: "Ahmed Khaled", location: "Alexandria, Egypt", image: ChefTempImg },
//   { name: "Magdy Mahmoud", location: "New Cairo, Egypt", image: ChefTempImg },
//   { name: "Amgad Yasser", location: "Luxor, Egypt", image: ChefTempImg },
// ];

function HomePage() {
  // const [searchTerm, setSearchTerm] = useState(""); // State to hold the search input
  // const [filteredChefs, setFilteredChefs] = useState(chefs);

  // const handleSearch = (e) => {
  //   const value = e.target.value.toLowerCase(); // Normalize the input
  //   setSearchTerm(value);

  //   // Filter the chefs based on the name or location
  //   const updatedChefs = chefs.filter(
  //     (chef) =>
  //       chef.name.toLowerCase().includes(value) ||
  //       chef.location.toLowerCase().includes(value)
  //   );
  //   setFilteredChefs(updatedChefs);
  // };

  return (
    <main
      className="HomePage min-h-[80dvh]  md:flex md:gap-10 mt-0 p-0 "
      id="overlay"
    >
      <section className="playwrite-us-modern   py-16 box-border">
        <div className="flex md:justify-center items-center md:gap-10 gap-0  mb-12 flex-col md:flex-row">
          <div className="flex flex-col items-center w-[80%] md:w-[62%] justify-center space-y-10   ">
            <img
              className="md:max-w-56 max-w-40 object-cover"
              src={LogoImg}
              alt="HomeLogo"
            />

            <p className="font-light playwrite-us-modern text-xl md:text-2xl text-justify leading-10 mx-2	px-5	">
              Welcome to{" "}
              <span className="text-main-color">Foodies & Chefs</span> where
              unforgettable dining experiences begin. Discover top chefs, book
              personalized events, and elevate your gatherings with ease.
            </p>
          </div>
          <div className="md:w-[32%] max-w-full content-end m-0">
            <img
              className="max-w-[80%] rounded-tl-[50px] rounded-br-[50px] hidden md:block"
              src={ChefImg}
              alt="ChefImg"
            />
            <img
              className="max-w-full md:hidden block m-auto"
              src={GroupChefsImg}
              alt="GroupChefImg"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-10 border-t-2 border-main-color py-12 mx-6">
          <h2 className="text-center md:text-start text-main-color text-4xl">
            How It Works
          </h2>
          <div className="grid grid-rows-6 grid-cols-1 md:grid-rows-3 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3  gap-10 mx-5 ">
            <p className="flex flex-col space-y-10 border-2 rounded-3xl h-72 justify-center border-main-color   content-end text-justify px-3">
              <span>Personalize your events!</span>
              <span>
                Fill in your event details, date, time, and location. Create
                event.
              </span>
              <span> CreateEvent.</span>
            </p>
            <p className="flex flex-col space-y-10 border-2 rounded-3xl h-72 justify-center border-main-color   content-end text-justify px-3">
              <span>Choose your Cuisine!</span>
              <span>Choose your desired menu from our renowned chefs. </span>
              <span>Receive Offers </span>
            </p>
            <p className="flex flex-col space-y-10 border-2 rounded-3xl h-72 justify-center border-main-color    content-end text-justify px-3">
              <span>Chat with chefs!</span>
              <span>Message your chef, confirm menu and cost.</span>
              <span>Confirm Offer</span>
            </p>
            <p className="flex flex-col space-y-10 border-2 rounded-3xl h-72 justify-center border-main-color   content-end text-justify px-3">
              <span>Book experience</span>
              <span>
                Happy with your chef and menu, submit payment via the
                agreed-upon method.
              </span>
              <span>Process payment</span>
            </p>
            <p className="flex flex-col space-y-10 border-2 rounded-3xl h-72 justify-center border-main-color   content-end text-justify px-3">
              <span>Send and confirm RSVP to your guests</span>
              <span>All done! Get ready for an unforgettable experience!</span>
              <span>Enjoy</span>
            </p>
            <p className="flex flex-col space-y-10 border-2 rounded-3xl h-72 justify-center border-main-color    content-end text-justify px-3">
              <span>Meet Our Chefs!</span>
              <span>
                Personalize your event and start chatting with our chefs!
              </span>
              <span></span>
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-10 border-t-2 border-main-color py-12 mx-6 ">
          <div className="flex justify-between flex-wrap space-y-5 md:space-y-0">
            <h2 className="text-start text-main-color text-3xl md:text-5xl">
              Meet Our Chefs!
            </h2>
            <div className="flex w-full md:w-fit justify-end md:justify-start">
              <div className="flex ltr:flex-row rtl:flex-row-reverse">
                <div className="border-y-2 border-l-2 border-main-color rounded-l-full text-l px-2 py-1 h-9 bg-transparent flex items-center">
                  <i className="fa-solid fa-magnifying-glass text-lg"></i>
                </div>
                <input
                  placeholder="Search"
                  className="bg-transparent text-main-color border-2 border-main-color border-l-0 rounded-r-full h-9 flex-grow px-3 focus:outline-none"
                  // value={searchTerm}
                  // onChange={handleSearch}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full">
            <div className="container w-full">
              {/* <ChefSlider chefs={filteredChefs} /> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
