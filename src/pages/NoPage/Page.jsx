import DishImg from "../../assets/images/dish.webp";

function NoPage() {
  return (
    <div className="mainbg h-[100vh] text-white flex items-center justify-center">
      <img
        src={DishImg}
        alt="Background"
        class="hidden md:block absolute inset-0 m-auto h-full object-cover opacity-40 mt-32"
      ></img>
      <div class="text-center z-10">
        <h2 className="font-bold text-2xl md:text-4xl mt-5 plus-jakarta-sans z-10">
          No Page Found
        </h2>
        <button
          type="submit"
          class="w-full mt-6 text-white bg-main-color font-bold focus:outline-none focus:ring-2 hover:bg-main-dark-color rounded-lg"
          style={{ height: "40.76px" }}
        >
          Home Page
        </button>
      </div>
    </div>
  );
}

export default NoPage;
