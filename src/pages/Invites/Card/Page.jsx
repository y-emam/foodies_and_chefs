import DateSVG from "../../../assets/svg/Date/Component";
import EmailSVG from "../../../assets/svg/Email/Component";
import LocationSVG from "../../../assets/svg/Location/Component";
import MoneySVG from "../../../assets/svg/Money/Component";
import PhoneSVG from "../../../assets/svg/Phone/Component";
import ProfileSVG from "../../../assets/svg/Profile/Component";
import TimeSVG from "../../../assets/svg/Time/Component";

function InvitationCardPage() {
  return (
    <main
      class="min-h-[32rem] flex justify-center w-full text-[#F1F1F1]"
      id="overlay"
    >
      <div class="w-full h-full npm bg-cover bg-no-repeat flex flex-col">
        <h1 class="ledger-regular font-normal text-center	 name-text	md:text-[40px] text-lg text-[#F1F1F1] p-5 pb-5">
          The Greatest Event
        </h1>
        <p class="mb-5 md:mb-10 plus-jakarta-sans text-center text-[#FA8836] md:text-[22px] text-sm italic font-normal">
          Get ready for a day of fun, laughter, and unforgettable memories as we
          celebrate mohamed’s special day!
        </p>
        <div class="flex flex-col lg:space-y-10 space-y-3  h-full self-start mx=0 md:mx-24 font-extrabold text-2xl text-[#F1F1F1] md:w-10/12 w-full  ">
          <div class="flex items-center text-[0.7rem] md:text-2xl ">
            <ProfileSVG />
            <span>Yasser Emam</span>
          </div>
          <div class="flex items-center text-[0.7rem] md:text-2xl">
            <EmailSVG />
            <span>yasser@gmail.com</span>
          </div>
          <div class="flex items-center text-[0.7rem] md:text-2xl ">
            <PhoneSVG />
            <span>0102145235</span>
          </div>

          <div class="flex items-center text-[0.7rem] md:text-2xl">
            <MoneySVG />
            <span>$100 Per person</span>
          </div>

          <div class="md:flex flex-col md:flex-row space-y-5 md:space-y-0 text-[0.7rem] md:text-2xl ">
            <div class="flex ">
              <DateSVG />
              <span>1/9/2024</span>
            </div>
            <div class="flex md:mx-10 mx-0">
              <TimeSVG />
              <span> {`{ Start 8:00 } - { End 11:30 } `} </span>
            </div>
          </div>
          <div class="flex items-center  text-[0.7rem] md:text-2xl ">
            <LocationSVG />
            <span>Zahraa ,Nasr city, Egypt</span>
          </div>

          <div class="flex relative w-full md:w-2/3 md:h-56 h-64 justify-center items-center ">
            <div
              id="map"
              class="absolute w-full h-60 lg:h-60 md:h-40 mb-10"
              style={{ backgroundColor: "orange", zIndex: "10" }}
            >
              <input
                id="lat"
                value="@Event.Latitude"
                class="form-control hidden"
                readonly
              />
              <input
                id="log"
                value="@Event.Longitude"
                class="form-control hidden"
                readonly
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center w-full relative">
          <div class="before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:z-10 before:bg-[#00000080]  flex justify-center   w-full npm  bg-no-repeat min-h-60 ">
            <div class="z-20  w-full     m-auto">
              <h2 class="handlee-regular text-7xl md:text-9xl">
                @SharedLocalizer["Our Menu"]
              </h2>
              <p class="uppercase text-2xl md:text-4xl">
                @SharedLocalizer["Special Dishes for you"]
              </p>
            </div>

            <svg
              class="z-20 md:w-full w-1/2"
              width="473"
              height="158"
              viewBox="0 0 473 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </div>
          <form
            method="post"
            asp-action="InvetationPage"
            class="min-h-fit flex flex-col items-center justify-center bg-[#000000D9] md:npm ')] bg-no-repeat bg-cover w-full relative z-20"
          >
            <input type="hidden" name="EventId" value="@Event.id" />

            <div class="w-full flex flex-col items-center justify-center">
              <div class="max-h-fit flex flex-col npm  bg-no-repeat bg-auto w-full md:w-10/12 items-center">
                {/* Chef name */}
                <p class="ledger-regular text-3xl text-[#FA8836] uppercase w-11/12 border-t-2 border-[#FA8836] pt-5 mt-14 text-center">
                  @SharedLocalizer["chef"]: @Event.Chef.FirstName
                  @Event.Chef.LastName{" "}
                </p>

                {/* Menu Section */}
                <div class="md:flex hidden justify-between items-start p-5 md:p-14 w-full ">
                  <div class="w-1/2 text-start">
                    <span class="mogra-regular name-text md:text-4xl text-xl">
                      @SharedLocalizer["AmuseBouche"]
                    </span>
                    <p class="Interl md:text-l text-lg font-medium">
                      @Html.Raw(Menu.AmuseBoucheDec.Replace("\n", "<br />
                      "))
                    </p>
                  </div>

                  <img
                    src="~/Menu/@Menu.AmuseBoucheImage"
                    class="w-[160px] h-[160px] hover:scale-[2] hover:-translate-x-6  transform-gpu transition duration ease-in-out"
                    alt=""
                  />
                </div>
                <div class="flex flex-col md:hidden justify-between items-center p-5 md:p-14 w-full ">
                  z
                  <div class="w-full text-start">
                    <span class="mogra-regular name-text md:text-4xl text-xl">
                      @SharedLocalizer["AmuseBouche"]
                    </span>
                  </div>
                  <div class="w-full">
                    <img
                      src="~/Menu/@Menu.AmuseBoucheImage"
                      class="w-full h-auto"
                    />
                  </div>
                  <div class="w-full text-start">
                    <p class="Interl md:text-l text-lg font-medium">
                      @Html.Raw(Menu.AmuseBoucheDec.Replace("\n", "<br />
                      "))
                    </p>
                  </div>
                </div>

                <div class="md:flex hidden justify-between items-start p-5 md:p-14 w-full ">
                  <div class="w-1/2 text-start">
                    <span class="mogra-regular name-text md:text-4xl text-xl	">
                      @SharedLocalizer["Appetizer"]
                    </span>
                    <p class="Interl md:text-xl text-lg font-medium ">
                      @Html.Raw(@Menu.AppetizerDec.Replace("\n", "<br />
                      "))
                    </p>
                  </div>
                  @if (Menu.AppetizerImage == "Object reference not set to an
                  instance of an object.")
                  {<img class="w-[160px] h-[160px]  " />}
                  else
                  {
                    <img
                      src="~/Menu/@Menu.AppetizerImage"
                      class="w-[160px] h-[160px] hover:scale-[2] hover:-translate-x-6  transform-gpu transition duration-700 ease-in-out"
                    />
                  }
                </div>
                <div class="flex flex-col md:hidden justify-between items-center p-5 md:p-14 w-full ">
                  <div class="w-full text-start">
                    <span class="mogra-regular name-text md:text-4xl text-xl	">
                      @SharedLocalizer["Appetizer"]
                    </span>
                  </div>
                  <div class="w-full">
                    <img
                      src="~/Menu/@Menu.AppetizerImage"
                      class="w-full h-auto "
                    />
                  </div>

                  <div class="w-full text-start">
                    <p class="Interl md:text-xl text-lg font-medium ">
                      @Html.Raw(Menu.AppetizerDec.Replace("\n", "<br />
                      "))
                    </p>
                  </div>
                </div>

                <div class="md:flex hidden justify-between items-start p-5 md:p-14 w-full ">
                  <div class="w-1/2 text-start">
                    <span class="mogra-regular name-text md:text-4xl text-xl	">
                      @SharedLocalizer["Salad"]
                    </span>
                    <p class="Interl md:text-xl text-lg font-medium ">
                      @Html.Raw(@Menu.SaladDec.Replace("\n", "<br />
                      "))
                    </p>
                  </div>

                  <img
                    src="~/Menu/@Menu.SaladImage"
                    class="w-[160px] h-[160px] hover:scale-[2] hover:-translate-x-6  transform-gpu transition duration-700 ease-in-out"
                  />
                </div>
                <div class="flex flex-col md:hidden justify-between items-center p-5 md:p-14 w-full ">
                  <div class="w-full text-start">
                    <span class="mogra-regular name-text md:text-4xl text-xl	">
                      @SharedLocalizer["Salad"]
                    </span>
                  </div>
                  <div class="w-full">
                    <img src="~/Menu/@Menu.SaladImage" class="w-full h-auto" />
                  </div>

                  <div class="w-full text-start">
                    <p class="Interl md:text-xl text-lg font-medium ">
                      @Html.Raw(Menu.SaladDec.Replace("\n", "<br />
                      "))
                    </p>
                  </div>
                </div>

                <div class="md:flex hidden justify-between items-start p-5 md:p-14 w-full ">
                  <div class="w-1/2 text-start">
                    <span class="mogra-regular name-text md:text-4xl text-xl	">
                      @SharedLocalizer["MainCourse"]
                    </span>
                    <p class="Interl md:text-xl text-lg font-medium ">
                      @Html.Raw(Menu.MainCourseDec.Replace("\n", "<br />
                      "))
                    </p>
                  </div>

                  <img
                    src="~/Menu/@Menu.MainCourseImage"
                    class="w-[160px] h-[160px] hover:scale-[2] hover:-translate-x-6  transform-gpu transition duration-700 ease-in-out"
                  />
                </div>
                <div class="flex flex-col md:hidden justify-between items-center p-5 md:p-14 w-full ">
                  <div class="w-full text-start">
                    <span class="mogra-regular name-text md:text-4xl text-xl	">
                      @SharedLocalizer["MainCourse"]
                    </span>
                  </div>
                  <div class="w-full">
                    <img
                      src="~/Menu/@Menu.MainCourseImage"
                      class="w-full h-auto "
                    />
                  </div>

                  <div class="w-full text-start">
                    <p class="Interl md:text-xl text-lg font-medium ">
                      @Html.Raw(Menu.MainCourseDec.Replace("\n", "<br />
                      "))
                    </p>
                  </div>
                </div>

                <div class="md:flex hidden justify-between items-start p-5 md:p-14 w-full ">
                  <div class="w-1/2 text-start">
                    <span class="mogra-regular name-text md:text-4xl text-xl	">
                      @SharedLocalizer["Dessert"]
                    </span>
                    <p class="Interl md:text-xl text-lg font-medium ">
                      @Html.Raw(Menu.DessertDec.Replace("\n", "<br />
                      "))
                    </p>
                  </div>
                  <img
                    src="~/Menu/@Menu.DessertImage"
                    class="w-[160px] h-[160px] hover:scale-[2] hover:-translate-x-6  transform-gpu transition duration-700 ease-in-out"
                    alt=""
                  />
                </div>
                <div class="flex flex-col md:hidden justify-between items-center p-5 md:p-14 w-full ">
                  <div class="w-full text-start">
                    <span class="mogra-regular name-text md:text-4xl text-xl	">
                      @SharedLocalizer["Dessert"]
                    </span>
                  </div>
                  <div class="w-full">
                    @if (Menu.DessertImage == "Object reference not set to an
                    instance of an object.")
                    {<img class="w-full h-auto" alt="" />}
                    else
                    {
                      <img
                        src="~/Menu/@Menu.DessertImage"
                        class="w-full h-auto"
                        alt=""
                      />
                    }
                  </div>

                  <div class="w-full text-start">
                    <p class="Interl md:text-xl text-lg font-medium ">
                      @Html.Raw(Menu.DessertDec.Replace("\n", "<br />
                      "))
                    </p>
                  </div>
                </div>

                {/* Add other menu items similarly */}

                <div class="flex flex-col items-center justify-center w-full md:mt-28 md:mb-14 mt-20 mb-5 z-30">
                  <label class="cairo font-semibold md:text-[32px] text-[16px] my-3">
                    @SharedLocalizer["Total Number Of Invitation"]
                  </label>
                  <input
                    asp-for="NumberOfInvitation"
                    type="number"
                    max="@maxCount"
                    name="NumberOfInvitation"
                    class="bg-[#D9D9D933] md:w-1/3 w-2/3 md:h-[78px] h-[40px] rounded-none p-3"
                    min="1"
                  />
                  <span
                    asp-validation-for="NumberOfInvitation"
                    class="lato-bold font-medium text-red-600"
                  ></span>
                  <div class="flex items-center justify-center gap-5  z-30 my-5">
                    {/* @if (sameUser)
                              { */}
                    <button
                      disabled
                      type="submit"
                      class="hover:bg-[#CF5600] md:w-[330px] md:h-[57px] w-[130px] h-[27px] bg-[#D9D9D9] text-white md:p-2 p-0 md:text-3xl text-xs font-bold rounded-[15px]"
                    >
                      @SharedLocalizer["Accept"]
                    </button>
                    <button
                      disabled
                      class=" md:w-[330px] md:h-[57px] w-[130px] h-[27px] bg-[#D9D9D9] text-white md:p-2 p-1 md:text-3xl text-xs font-bold text-center rounded-[15px]"
                    >
                      @SharedLocalizer["Save"]
                    </button>
                    {/* } */}
                    {/* else
                              {
                                  @if (requestInv == null || requestInv.NumberOfInvitation == 0)
                                  {
                                      <button type="submit" class="hover:bg-[#CF5600] md:w-[330px] md:h-[57px] w-[130px] h-[27px] bg-[#FA8836] text-white md:p-2 p-0 md:text-3xl text-xs font-bold rounded-[15px] border-[3px] border-[#FA8836] drop-shadow-md shadow-[#FA8836] hover:bg-transparent  hover:border-[3px] hover:border-[#FA8836] hover:text-[#FA8836]   ">@SharedLocalizer["Accept"]</button>
                                      @if (requestInv != null)
                                      {
                                          @if (requestInv.Draft == false)
                                          {
                                              <a asp-action="SaveInvtation" asp-route-EventId="@Event.id" class="  md:w-[330px] md:h-[57px] w-[130px] h-[27px] bg-[#6555FF] text-white md:p-2 p-1 md:text-3xl text-xs font-bold text-center rounded-[15px] border-[3px] border-[#7163FF59] drop-shadow-md shadow-[#7163FF59] hover:bg-transparent hover:border-4 hover:border-[#4136A3] hover:text-[#4136A3]">@SharedLocalizer["Save"]</a>

                                          }
                                          else
                                          {
                                              <button disabled class=" md:w-[330px] md:h-[57px] w-[130px] h-[27px] bg-[#D9D9D9] text-white md:p-2 p-1 md:text-3xl text-xs font-bold text-center rounded-[15px]">@SharedLocalizer["Save"]</button>

                                          }
                                      }
                                      else
                                      {
                                          <a asp-action="SaveInvtation" asp-route-EventId="@Event.id" class="  md:w-[330px] md:h-[57px] w-[130px] h-[27px] bg-[#6555FF] text-white md:p-2 p-1 md:text-3xl text-xs font-bold text-center rounded-[15px] border-[3px] border-[#7163FF59] drop-shadow-md shadow-[#7163FF59] hover:bg-transparent hover:border-4 hover:border-[#4136A3] hover:text-[#4136A3]">@SharedLocalizer["Save"]</a>

                                      }

                                  }
                                  else
                                  {
                                      <button disabled type="submit" class="hover:bg-[#CF5600] md:w-[330px] md:h-[57px] w-[130px] h-[27px] bg-[#D9D9D9] text-white md:p-2 p-0 md:text-3xl text-xs font-bold rounded-[15px]">@SharedLocalizer["Accept"]</button>
                                      <button disabled class=" md:w-[330px] md:h-[57px] w-[130px] h-[27px] bg-[#D9D9D9] text-white md:p-2 p-1 md:text-3xl text-xs font-bold text-center rounded-[15px]">@SharedLocalizer["Save"]</button>


                                  }
                              } */}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default InvitationCardPage;
