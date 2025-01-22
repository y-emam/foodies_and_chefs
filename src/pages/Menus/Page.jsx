import { useEffect, useState } from "react";
import Dish3Img from "../../assets/images/image3.svg";
import "./styles.css";

function MenusPage() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus([
      {
        id: "b755d17d-62f0-444a-5280-08dd3a30e7f0",
        name: "Classic Menu",
      },
    ]);
  }, []);
  return (
    <main class="min-h-[80dvh]  md:flex md:gap-10 mt-0 p-0 " id="overlay">
      <section class="min-h-screen space-y-3 md:min-h-full flex flex-col w-full  md:w-7/12 p-3  md:p-5 z-10 text-start lato-bold md:pl-10 plus-jakarta-sans ">
        <div class="w-full flex flex-col justify-center items-center ">
          <h2 class="zeyada-regular text-main-color md:text-7xl text-5xl text-center text-[#FA8836]">
            Showcase your talent
          </h2>
          <h2 class="plus-jakarta-sans md:text-4xl text-2xl text-center">
            Create your menus here
          </h2>
        </div>
        <div class="w-full flex justify-center items-center mb-6 mt-0">
          <a
            class="text-center font-bold text-xl plus-jakarta-sans w-2/6 text-white bg-[#FA8836] h-[53px] flex justify-center items-center mb-2 hover:bg-[#CF5600] border-[3px] border-[#FA8836] drop-shadow-md shadow-[#FA8836] hover:bg-transparent  hover:border-[3px] hover:border-[#FA8836] hover:text-[#FA8836] rounded-[16px]  "
            href="/menus/create"
          >
            Add menu
          </a>
        </div>

        {menus.map((menu) => (
          <div
            class="bg-[#FA8836] h-[53px] flex justify-between w-full items-center p-6 rtl:pl-0 ltr:pr-0 "
            style={{ borderRadius: "16px" }}
          >
            <div class="font-bold text-xl mx-5">{menu.name}</div>
            <div class="flex text-center">
              <a
                class="plus-jakarta-sans h-[53px] w-[149px] bg-white text-[#FA8836] p-2 font-bold text-xl flex items-center justify-center rounded-[16px] hover:bg-[#000000]  hover:border-[3px] hover:border-[#000000]	"
                href={`/Chef/UpdateChefMenu?menuId=${menu.id}`}
              >
                Show menu
              </a>
            </div>
          </div>
        ))}

        <div class="flex justify-center mt-6 gap-2">
          <button
            disabled
            class="bg-white text-black font-semibold px-3 py-3 rounded-md"
          >
            <svg
              class="rtl:block ltr:hidden"
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.72747 7.19041L2.46094 12.7137C2.09693 13.0954 1.50832 13.0954 1.14818 12.7137L0.273008 11.7958C-0.0910026 11.4141 -0.0910026 10.7968 0.273008 10.4191L4.00605 6.50406L0.273008 2.58903C-0.0910026 2.20728 -0.0910026 1.58997 0.273008 1.21228L1.14431 0.286317C1.50832 -0.0954389 2.09693 -0.0954389 2.45707 0.286317L7.7236 5.80959C8.09148 6.19135 8.09148 6.80865 7.72747 7.19041Z"
                fill="black"
              />
            </svg>

            <svg
              class="ltr:block rtl:hidden"
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.272394 5.80959L5.53638 0.286317C5.90021 -0.0954389 6.48854 -0.0954389 6.8485 0.286317L7.72325 1.20415C8.08709 1.58591 8.08709 2.20322 7.72325 2.58091L3.99589 6.5L7.72712 10.415C8.09096 10.7968 8.09096 11.4141 7.72712 11.7918L6.85237 12.7137C6.48854 13.0954 5.90021 13.0954 5.54025 12.7137L0.276264 7.19041C-0.0914405 6.80865 -0.0914404 6.19135 0.272394 5.80959Z"
                fill="black"
              />
            </svg>
          </button>

          <a
            class="bg-orange-500 text-white font-semibold px-3 py-1 rounded-md"
            href="/Chef/ChefMenu?page=1"
          >
            1
          </a>

          <button
            disabled
            class="bg-white text-black font-semibold px-3 py-3 rounded-md"
          >
            <svg
              class="ltr:block rtl:hidden"
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.72747 7.19041L2.46094 12.7137C2.09693 13.0954 1.50832 13.0954 1.14818 12.7137L0.273008 11.7958C-0.0910026 11.4141 -0.0910026 10.7968 0.273008 10.4191L4.00605 6.50406L0.273008 2.58903C-0.0910026 2.20728 -0.0910026 1.58997 0.273008 1.21228L1.14431 0.286317C1.50832 -0.0954389 2.09693 -0.0954389 2.45707 0.286317L7.7236 5.80959C8.09148 6.19135 8.09148 6.80865 7.72747 7.19041Z"
                fill="black"
              />
            </svg>

            <svg
              class="rtl:block ltr:hidden"
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.272394 5.80959L5.53638 0.286317C5.90021 -0.0954389 6.48854 -0.0954389 6.8485 0.286317L7.72325 1.20415C8.08709 1.58591 8.08709 2.20322 7.72325 2.58091L3.99589 6.5L7.72712 10.415C8.09096 10.7968 8.09096 11.4141 7.72712 11.7918L6.85237 12.7137C6.48854 13.0954 5.90021 13.0954 5.54025 12.7137L0.276264 7.19041C-0.0914405 6.80865 -0.0914404 6.19135 0.272394 5.80959Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </section>
      <section class="w-5/12 hidden md:flex justify-end ">
        <img src={Dish3Img} class="h-5/6 object-cover" alt="FoodImage" />
      </section>
    </main>
  );
}

export default MenusPage;
