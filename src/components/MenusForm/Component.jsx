import { useEffect, useState } from "react";
import DishImg2 from "../../assets/images/dish.webp";
import { useTranslation } from "react-i18next";

function MenusForm({ isNewMenu, menu, setMenu }) {
  const { t } = useTranslation();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents([
      {
        id: "5cac8011-c94a-4f11-5285-08dd3a229010",
        name: "Festival",
        date: "Tue 21-Jan-2025 15:49",
      },
    ]);
  }, []);

  return (
    <div className="mainbg overflow-hidden min-h-screen">
      <div className="w-full  mx-3 my-3 border-custom">
        <main className="min-h-[80dvh] md:flex md:gap-10 mt-0 p-0" id="overlay">
          <section className="min-h-screen space-y-6 md:min-h-full flex flex-col w-full md:w-7/12 p-3 md:p-5 z-10 text-start lato-bold md:pl-10 plus-jakarta-sans">
            <div className="w-full flex flex-col justify-center items-center Interl ">
              <div className="flex justify-center items-center gap-2 w-1/2">
                <div className="flex flex-col w-1/3 gap-2 items-end">
                  <span className="border-main-color w-1/2 block border-[1px]" />
                  <span className="border-main-color w-3/4 block border-[1px]" />
                </div>
                <h2 className="text-2xl">Menu</h2>
                <div className="flex flex-col w-1/3 gap-2">
                  <span className="border-main-color w-1/2 block border-[1px]" />
                  <span className="border-main-color w-3/4 block border-[1px]" />
                </div>
              </div>
              <h3 className="uppercase text-sm">Choose your food</h3>
            </div>
            <div>
              <div className="mb-1">
                <label className="section-title">Name</label>
                <input
                  maxLength="100"
                  type="text"
                  id="event-Description"
                  className="opacity-90 rounded-none placeholder-gray-400 focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none h-[47.02px] bg-[#444444] form-control w-full p-3"
                  placeholder="Menu Name"
                  required
                />
              </div>
              <div className="mb-1">
                <label className="section-title">Description</label>
                <input
                  maxLength="100"
                  type="text"
                  id="event-Description"
                  className="opacity-90 rounded-none placeholder-gray-400 focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none h-[47.02px] bg-[#444444] form-control w-full p-3"
                  placeholder="Menu Description"
                  required
                />
              </div>
              <div class=" relative mb-1">
                <label class="Interl section-title" for="AmuseBoucheDec">
                  Amuse-bouche
                </label>
                <div class="Interl focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[66px] border border-[#FFFFFF4D] bg-[#444444] form-control w-full   ">
                  <textarea
                    value=""
                    name="AmuseBoucheDec"
                    type="text"
                    class=" Interl focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[66px] border border-[#FFFFFF4D] bg-[#444444] form-control w-7/12  p-3"
                    placeholder="Description:"
                    data-val="true"
                    data-val-required=" this field is required."
                    id="AmuseBoucheDec"
                  ></textarea>
                </div>
                <span
                  class=" Interl font-medium text-red-600 text-[10px] md:text-[12px] h-[27.5px] field-validation-valid"
                  data-valmsg-for="AmuseBoucheDec"
                  data-valmsg-replace="true"
                ></span>
                <div class="absolute top-4 end-12 md:end-32 flex flex-col items-center justify-center rtl:pl-3 ltr:pr-3 pt-6">
                  <label
                    for="AmuseBoucheImage"
                    name="AmuseBoucheImage"
                    class="AmuseBoucheImageLable lg:block p-2 leading-3 bg-[#242424] text-xsm font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none hover:bg-[#FA8836]"
                  >
                    Choose Image
                  </label>
                  <label
                    for="AmuseBoucheImage"
                    name="AmuseBoucheImage"
                    class="AmuseBoucheImageLable lg:hidden p-2 leading-3 bg-[#242424] text-xsm font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none hover:bg-[#FA8836]"
                  >
                    <i class="fa-solid fa-upload"></i>
                  </label>
                  <input
                    id="AmuseBoucheImage"
                    type="file"
                    name="AmuseBoucheImage"
                    style={{ display: "none" }}
                  />
                </div>
                <div class="absolute lg:block top-4 end-2 md:end-2  flex flex-col items-center justify-center ltr:pr-3 rtl:pl-3 pt-6">
                  <button
                    type="button"
                    id="ShowAmuseBoucheImage"
                    name="ShowAmuseBoucheImage"
                    class="btn-show-image hover:bg-[#FA8836] p-2 leading-3 bg-[#242424] text-xsm Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none"
                  ></button>
                </div>
                <div class="absolute lg:hidden top-4 right-0 flex flex-col items-center justify-center pr-3 pt-6">
                  <button
                    type="button"
                    id="ShowAmuseBoucheImageMobile"
                    name="ShowAmuseBoucheImageMobile"
                    class=" btn-show-image hover:bg-[#FA8836] p-2 leading-3 bg-[#242424] text-xsm Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none"
                  ></button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-5/12 hidden md:flex justify-end ltr:border-l rtl: border-r border-[#FA8836]">
            <img
              src={DishImg2}
              className="w-[30rem] h-auto object-cover"
              alt="FoodImage"
            />
          </section>
        </main>
      </div>
    </div>
  );
}

export default MenusForm;
