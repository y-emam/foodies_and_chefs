import DishImg from "../../assets/images/dish.webp";
import { useEffect, useState } from "react";
import "./styles.css";

function InvitesPage() {
  const [invites, setInvites] = useState([]);

  useEffect(() => {
    setInvites([]);
  }, []);

  return (
    <main
      class="invites-page min-h-[80dvh]  md:flex md:gap-10 mt-0 p-0 plus-jakarta-sans"
      id="overlay"
    >
      <section class="min-h-screen mainbg relative   space-y-6 md:min-h-full flex flex-col w-full items-center p-3 md:p-5 z-10 text-start lato-bold md:pl-10 plus-jakarta-sans">
        <img
          src={DishImg}
          alt="Background"
          class="hidden md:block absolute inset-0 m-auto h-full object-cover z-0 opacity-40"
        />

        <form
          method="get"
          action="/GetMyInvitation"
          class="w-full flex md:flex-row flex-col justify-center md:space-y-0 space-y-5"
        >
          <div class="relative flex flex-col  md:w-1/4 w-full  items-center">
            <lable class="section-title font-medium self-start md:self-start lg:self-start text-start p">
              Status
            </lable>

            <select
              onchange="this.form.submit()"
              name="status"
              class="text-xs	 md:text-xl appearance-none    w-full px-4 py-2 rounded-[15px] text-white opacity-70 h-[39px] md:h-[48px]    border border-[#FFFFFF4D]  bg-[#444444] form-control    p-3   focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none"
            >
              <option
                value="all"
                class=" checked:bg-orange-100 bg-white text-black "
              >
                - All -
              </option>

              <option
                value="accepted"
                class="checked:bg-orange-100 bg-white text-black "
              >
                Confirmed
              </option>

              <option
                value="declined"
                class="checked:bg-orange-100 bg-white text-black "
              >
                Declined
              </option>

              <option
                value="draft"
                class="checked:bg-orange-100 bg-white text-black "
              >
                Draft
              </option>

              <option
                value="pending"
                class="checked:bg-orange-100 bg-white text-black "
              >
                Pending
              </option>
            </select>
            <div class="absolute top-7 ltr:right-2 rtl:left-2 md:ltr:right-[2%] md:rtl:left-[2%] flex items-center px-2 pointer-events-none">
              <i class="text-2xl md:text-3xl fa-solid fa-caret-down"></i>
            </div>
          </div>
        </form>

        {!invites || invites?.length === 0 ? (
          <div class="text-center z-10">
            <div class="font-bold text-base md:text-2xl mt-5 plus-jakarta-sans">
              You have not been invited to attend any events yet.{" "}
            </div>
          </div>
        ) : (
          <div>invites</div>
        )}
      </section>
    </main>
  );
}

export default InvitesPage;
