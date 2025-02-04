import { useEffect } from "react";
import DishImg2 from "../../assets/images/dish.webp";

function MenusForm({ isNewMenu, menu, setMenu }) {
  // const [, setEvents] = useState([]);

  // useEffect(() => {
  //   setEvents([
  //     {
  //       id: "5cac8011-c94a-4f11-5285-08dd3a229010",
  //       name: "Festival",
  //       date: "Tue 21-Jan-2025 15:49",
  //     },
  //   ]);
  // }, []);

  // useEffect(() => {
  //   console.log(menu);
  // }, [menu]);

  return (
    <div className="mainbg overflow-hidden min-h-screen">
      <main className="min-h-[80dvh] md:flex md:gap-10 mt-0 p-0" id="overlay">
        <section className="min-h-screen space-y-6 md:min-h-full ltr:border-r rtl:border-l border-main-color flex flex-col w-full md:w-7/12 p-3 md:p-5 z-10 text-start lato-bold md:pl-10 plus-jakarta-sans">
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
                value={menu?.name}
                onChange={(e) => setMenu({ ...menu, name: e.target.value })}
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
                value={menu?.description}
                onChange={(e) =>
                  setMenu({ ...menu, description: e.target.value })
                }
              />
            </div>
            <hr className="w-full bg-main-color h-1 my-4 border-none" />
            {menu?.items?.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 mb-4">
                <div className="flex flex-col gap-2">
                  <label className="section-title flex flex-row justify-between pr-4">
                    Item {index + 1}
                    <i
                      className="fa-solid fa-trash-can text-lg text-main-color hover:text-red-500 cursor-pointer"
                      onClick={() => {
                        const newItems = [...menu.items];
                        newItems.splice(index, 1);
                        setMenu({ ...menu, items: newItems });
                      }}
                    />
                  </label>
                  <input
                    maxLength="100"
                    type="text"
                    id="AmuseBouche"
                    name="AmuseBouche"
                    className="opacity-90 rounded-none placeholder-gray-400 focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none h-[47.02px] bg-[#444444] form-control w-full p-3"
                    placeholder="Item Name"
                    value={item.name}
                    required
                    onChange={(e) => {
                      const newItems = [...menu.items];
                      newItems[index].name = e.target.value;
                      setMenu({ ...menu, items: newItems });
                    }}
                  />
                </div>
                <div className="relative mb-1">
                  <div className="Interl focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[66px] bg-[#444444] w-full">
                    <textarea
                      id="ItemDesc"
                      name="ItemDesc"
                      type="text"
                      className="Interl focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[66px] border border-[#FFFFFF4D] bg-[#444444] w-full p-3"
                      placeholder="Item Description"
                      value={item.description}
                      required
                      onChange={(e) => {
                        const newItems = [...menu.items];
                        newItems[index].description = e.target.value;
                        setMenu({ ...menu, items: newItems });
                      }}
                    ></textarea>
                  </div>
                  <div className="flex flex-row w-full justify-start items-center gap-4 mt-4">
                    <div>
                      <label
                        htmlFor={`ItemImg ${index}`}
                        name={`ItemImg ${index}`}
                        className={`hidden lg:block w-38 py-1 px-2 rounded-md text-lg text-center text-white font-medium hover:bg-main-dark-color cursor-pointer ${
                          item.image ? "bg-main-color" : "bg-[#444444]"
                        }`}
                      >
                        Choose Image
                      </label>
                      <label
                        htmlFor={`ItemImg ${index}`}
                        className={`lg:hidden p-2 text-sm font-medium w-33 h-8 text-white rounded-md flex items-center justify-center focus:outline-none hover:bg-main-dark-color cursor-pointer ${
                          item.image ? "bg-main-color" : "bg-[#444444]"
                        }`}
                      >
                        <i className="fa-solid fa-upload" />
                      </label>
                      <input
                        type="file"
                        id={`ItemImg ${index}`}
                        name={`ItemImg ${index}`}
                        required
                        onChange={(e) => {
                          const newItems = [...menu.items];
                          newItems[index].image = e.target.files[0];
                          setMenu({ ...menu, items: newItems });
                        }}
                        style={{ display: "none" }}
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        id={`ShowItemImg ${index}`}
                        name={`ShowItemImg ${index}`}
                        className={`hidden lg:block w-38 py-1 px-2 rounded-md text-lg text-center text-white font-medium hover:bg-main-dark-color cursor-pointer ${
                          item.image ? "bg-main-color" : "bg-[#444444]"
                        }`}
                      >
                        Show Image
                      </button>
                      <button
                        type="button"
                        id={`ShowItemImg ${index}`}
                        name={`ShowItemImg ${index}`}
                        className={`lg:hidden p-2 text-sm font-medium w-33 h-8 text-white rounded-md flex items-center justify-center focus:outline-none hover:bg-main-dark-color cursor-pointer ${
                          item.image ? "bg-main-color" : "bg-[#444444]"
                        }`}
                      >
                        <i className="fa-solid fa-image" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center items-center gap-4">
              <button
                className="px-4 py-2 mt-10 text-lg font-bold bg-main-color hover:bg-[#CF5600]"
                onClick={() => {
                  const newItems = [...menu.items];
                  newItems.push({ name: "", description: "", image: null });
                  setMenu({ ...menu, items: newItems });
                }}
              >
                Add Item
              </button>
            </div>
          </div>
        </section>
        <section className="w-5/12 hidden md:flex justify-end">
          <img
            src={DishImg2}
            className="w-[30rem] h-[30rem] object-cover"
            alt="FoodImage"
          />
        </section>
      </main>
    </div>
  );
}

export default MenusForm;
