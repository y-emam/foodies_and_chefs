import DishImg from "../../../assets/images/dish.webp";
import ArrowUpSVG from "../../../assets/images/ArrowUp.svg";
import ArrowDownSVG from "../../../assets/images/ArrowDown.svg";
import "./styles.css";
import { useTranslation } from "react-i18next";

function CreateEventsPage() {
  const { t } = useTranslation();

  return (
    <div className="mainbg overflow-auto min-h-screen pt-4">
      <main className="min-h-[80dvh] md:flex md:gap-10 mt-0 p-0 " id="overlay">
        <section className="CreateEventpgMobile w-full  md:w-7/12 p-3  md:p-5 z-10 text-start lato-bold md:pl-20  ">
          <form method="post" dir="auto" action="/" novalidate="novalidate">
            <div className="mb-1 ">
              <label
                for="event-name"
                className="section-title lato-bold font-medium"
              >
                {t("events.name")}
              </label>

              <input
                name="EventName"
                type="text"
                maxlength="30"
                id="event-name"
                className="opacity-70 h-[47.02px] border border-[#FFFFFF4D]  bg-[#444444] form-control w-full  p-3   focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none"
                placeholder={t("events.namePlaceholder")}
                data-val="true"
                data-val-required=" this field is required."
                value=""
              />
              <span
                className=" lato-bold font-medium text-red-600 text-[10px] md:text-[12px] field-validation-valid"
                data-valmsg-for="EventName"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div className="mb-1">
              <label for="event-Description" className="section-title">
                {t("events.description")}
              </label>
              <input
                name="EventDescription"
                maxlength="100"
                type="text"
                id="event-Description"
                className="focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] form-control w-full   p-3"
                placeholder={t("events.descriptionPlaceholder")}
                data-val="true"
                data-val-required=" this field is required."
                value=""
              />
              <span
                className=" lato-bold font-medium text-red-600 text-[10px] md:text-[12px] field-validation-valid"
                data-valmsg-for="EventDescription"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div className="flex md:flex-row flex-col gap-4 mb-1">
              <div className="flex md:w-2/3 w-full">
                <div className="flex flex-col w-1/2 rtl:ml-4 ltr:mr-4">
                  <label
                    for="event-date"
                    className="section-title lato-bold font-medium"
                  >
                    t{t("events.date")}
                  </label>
                  <input
                    name="Date"
                    type="date"
                    id="event-date"
                    className="focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-85 h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] px-1 text-sm form-control  w-full  p-2"
                    data-val="true"
                    data-val-required=" this field is required."
                    value=""
                    min="2025-01-21"
                  />
                  <input name="__Invariant" type="hidden" value="Date" />
                  <span
                    className=" lato-bold font-medium text-red-600 text-[10px] md:text-[12px] field-validation-valid"
                    data-valmsg-for="Date"
                    data-valmsg-replace="true"
                  ></span>
                </div>
                <div className="ms-1.5 md:ms-0 flex flex-col w-1/2">
                  <label for="event-time" className="section-title">
                    {t("events.time")}
                  </label>
                  <input
                    name="StartTime"
                    type="time"
                    value="03:40"
                    min="13:40"
                    id="event-time"
                    className="focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-85 h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] px-1 form-control  w-full  text-sm"
                    data-val="true"
                    data-val-required=" this field is required."
                  />
                  <input name="__Invariant" type="hidden" value="StartTime" />
                  <span
                    className=" lato-bold font-medium text-red-600 text-[10px] md:text-[12px] field-validation-valid"
                    data-valmsg-for="StartTime"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-2  gap-x-4 gap-y-0 md:w-1/3 w-full">
                <input
                  type="datetime"
                  className="hidden"
                  value=""
                  name="EndTime"
                  id="EndTime"
                  data-val="true"
                  data-val-required="The EndTime field is required."
                />

                <div className="flex flex-col w-full relative">
                  <label for="hours" className="section-title">
                    {t("events.hours")}
                  </label>
                  <input
                    type="number"
                    id="hours"
                    name="Hours"
                    className="focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] px-1 text-sm form-control p-2"
                    placeholder="1"
                    min="0"
                    max="24"
                    step="1"
                    data-val="true"
                    data-val-required="The Hours field is required."
                    value=""
                  />
                  <input name="__Invariant" type="hidden" value="Hours" />

                  {/* Increment and decrement buttons for hours input */}
                  <div className="absolute top-7 flex flex-col items-center justify-center pr-3 rtl:left-2 ltr:right-0">
                    <button
                      type="button"
                      className="w-4 h-4 text-gray-500 bg-transparent rounded-md flex items-center justify-center focus:outline-none"
                      onClick="pluse('hours')"
                    >
                      <img src={ArrowUpSVG} alt="Alternate Text" />
                    </button>
                    <button
                      type="button"
                      className="w-4 h-4 text-gray-500 bg-transparent rounded-md flex items-center justify-center focus:outline-none mt-1"
                      onClick="mines('hours')"
                    >
                      <img src={ArrowDownSVG} alt="Alternate Text" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col w-full relative rtl">
                  <label for="minutes" className="section-title">
                    {t("events.minutes")}
                  </label>
                  <input
                    type="number"
                    id="minutes"
                    name="Minutes"
                    className="focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] px-1 text-sm form-control p-2"
                    placeholder="00"
                    value="00"
                    min="0"
                    max="59"
                    data-val="true"
                    data-val-required="The Minutes field is required."
                  />
                  <input name="__Invariant" type="hidden" value="Minutes" />
                  {/* Increment and decrement buttons for minutes input */}
                  <div className="absolute top-7 flex flex-col items-center justify-center pr-3 rtl:left-2 ltr:right-0">
                    <button
                      type="button"
                      className="w-4 h-4 text-gray-500 bg-transparent rounded-md flex items-center justify-center focus:outline-none"
                      onClick="pluse('minutes')"
                    >
                      <img src={ArrowUpSVG} alt="Alternate Text" />
                    </button>
                    <button
                      type="button"
                      className="w-4 h-4 text-gray-500 bg-transparent rounded-md flex items-center justify-center focus:outline-none mt-1"
                      onClick="mines('minutes')"
                    >
                      <img src={ArrowDownSVG} alt="Alternate Text" />
                    </button>
                  </div>
                </div>

                <span
                  className=" lato-bold font-medium text-red-600 text-[10px] md:text-[12px] field-validation-valid"
                  data-valmsg-for="EndTime"
                  data-valmsg-replace="true"
                ></span>
              </div>
            </div>

            {/* TODO: need to make this dynamic */}
            <p
              id="duration-output"
              className="  lato-bold font-medium text-[#FFFFFF] text-[13px] md:text-[12px] my-5"
            >
              This event will take place on 1/21/2025, From 01:40 PM until 01:40
              PM.
            </p>
            <div className="flex md:flex-row flex-col mb-5 h-20 space-y-4 md:space-y-0 md:h-auto">
              <div className="flex justify-start items-center text-start md:w-1/3 w-full mb-2 md:mb-0">
                <label
                  for="event-invitees"
                  className="section-title rtl:text-right ltr:text-left"
                >
                  {t("events.noGuests")}
                </label>
              </div>

              <div className="flex md:w-2/3 w-full space-x-4 rtl:space-x-reverse">
                {/* Minimum Input */}
                <div className="relative w-1/2 rtl:text-right ltr:text-left">
                  <label
                    for="Minimum"
                    className="section-title rtl:text-right ltr:text-left"
                  >
                    {t("events.minimum")}
                  </label>
                  <input
                    name="MinNumberOfInvetation"
                    step="1"
                    value="1"
                    type="number"
                    id="Minimum"
                    className="focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] px-3 text-sm form-control w-full"
                    min="1"
                    data-val="true"
                    data-val-required=" this field is required."
                  />
                  <input
                    name="__Invariant"
                    type="hidden"
                    value="MinNumberOfInvetation"
                  />
                  <span
                    className="lato-bold font-medium text-red-600 text-[10px] md:text-[12px] field-validation-valid"
                    data-valmsg-for="MinNumberOfInvetation"
                    data-valmsg-replace="true"
                  ></span>

                  <div className="absolute top-7 flex flex-col items-center justify-center pr-3 rtl:pl-3 ltr:pr-3 rtl:right-auto rtl:left-0 ltr:right-0">
                    <button
                      type="button"
                      className="w-4 h-4 text-gray-500 bg-transparent rounded-md flex items-center justify-center focus:outline-none"
                      onClick="stepInput('Minimum', 1)"
                    >
                      <img src={ArrowUpSVG} alt="Alternate Text" />
                    </button>
                    <button
                      type="button"
                      className="w-4 h-4 text-gray-500 bg-transparent rounded-md flex items-center justify-center focus:outline-none mt-1"
                      onClick="stepInput('Minimum', -1)"
                    >
                      <img src={ArrowDownSVG} alt="Alternate Text" />
                    </button>
                  </div>
                </div>

                {/* Maximum Input */}
                <div className="relative w-1/2 rtl:text-right ltr:text-left">
                  <label
                    for="Maximum"
                    className="section-title rtl:text-right ltr:text-left"
                  >
                    {t("events.maximum")}
                  </label>
                  <input
                    value="2"
                    name="MaxNumberOfInvetation"
                    id="Maximum"
                    type="number"
                    step="1"
                    className="focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] px-3 text-sm form-control w-full"
                    min="1"
                    data-val="true"
                    data-val-required=" this field is required."
                  />
                  <input
                    name="__Invariant"
                    type="hidden"
                    value="MaxNumberOfInvetation"
                  />
                  <span
                    className="lato-bold font-medium text-red-600 text-[10px] md:text-[12px] field-validation-valid"
                    data-valmsg-for="MaxNumberOfInvetation"
                    data-valmsg-replace="true"
                  ></span>

                  <div className="absolute top-7 flex flex-col items-center justify-center pr-3 rtl:pl-3 ltr:pr-3 rtl:right-auto rtl:left-0 ltr:right-0">
                    <button
                      type="button"
                      className="w-4 h-4 text-gray-500 bg-transparent rounded-md flex items-center justify-center focus:outline-none"
                      onClick="stepInput('Maximum', 1)"
                    >
                      <img src={ArrowUpSVG} alt="Alternate Text" />
                    </button>
                    <button
                      type="button"
                      className="w-4 h-4 text-gray-500 bg-transparent rounded-md flex items-center justify-center focus:outline-none mt-1"
                      onClick="stepInput('Maximum', -1)"
                    >
                      <img src={ArrowDownSVG} alt="Alternate Text" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mb-1" dir="auto">
              <input
                id="Longitude"
                type="number"
                className="hidden"
                name="Longitude"
                data-val="true"
                data-val-number="The field Longitude must be a number."
                data-val-required="The Longitude field is required."
                value=""
              />
              <input name="__Invariant" type="hidden" value="Longitude" />
              <input
                id="Latitude"
                type="number"
                className="hidden"
                name="Latitude"
                data-val="true"
                data-val-number="The field Latitude must be a number."
                data-val-required="The Latitude field is required."
                value=""
              />
              <input name="__Invariant" type="hidden" value="Latitude" />

              {/* Label for the location input */}
              <label
                for="event-location"
                className="section-title rtl:text-right ltr:text-left"
              >
                {t("events.location")}
              </label>

              {/* General Location input field */}
              <input
                value=""
                name="GeneralLocation"
                type="text"
                id="event-location"
                className="focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[47.02px] border border-[#FFFFFF4D] bg-[#444444] form-control w-full p-3 rtl:text-right ltr:text-left"
                placeholder={t("events.locationPlaceholder")}
                data-val="true"
                data-val-required=" this field is required."
              />

              <span
                className="lato-bold font-medium text-red-600 text-[10px] md:text-[12px] field-validation-valid"
                data-valmsg-for="GeneralLocation"
                data-valmsg-replace="true"
              ></span>

              {/* Button to open the map and set location */}
              <div className="absolute top-2 flex flex-col items-center justify-center pr-3 pt-6 rtl:left-2 ltr:right-0 rtl:right-auto ltr:left-auto">
                <button
                  onClick="openMapsPage()"
                  style={{ borderRadius: "10px" }}
                  type="button"
                  className="p-2 leading-3 bg-[#242424] text-xs lato-bold font-medium w-33 h-8 text-white rounded-md flex items-center justify-center focus:outline-none"
                >
                  {t("events.setYourLocation")}
                </button>
              </div>
            </div>

            <input
              type="hidden"
              name="Localtime"
              id="localtime"
              value="2025-01-21T11:40:41.770Z"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#6555FF] rounded-[35px]  w-[273px] h-[42px] mt-4 drop-shadow-md shadow-[#7163FF59] hover:bg-transparent hover:border-4 hover:border-[#4136A3] hover:text-[#4136A3]  "
              >
                {t("events.createEvent")}
              </button>
            </div>
            <input name="__RequestVerificationToken" type="hidden" />
          </form>
        </section>
        <section className="w-5/12 hidden md:flex justify-center ltr:border-l rtl: border-r border-[#FA8836]">
          <img
            src={DishImg}
            className="w-[30rem] h-auto object-cover"
            alt="DishImg"
          />
        </section>
      </main>
    </div>
  );
}

export default CreateEventsPage;
