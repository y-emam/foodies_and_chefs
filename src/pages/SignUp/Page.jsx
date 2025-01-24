import LogoImg from "../../assets/images/logo.webp";
import GoogleImg from "../../assets/images/Google.webp";
import "./styles.css";

function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center   hero-section backdrop-filter">
      <div className="lg:grid lg:grid-cols-2 w-full max-w-md lg:max-w-full space-y-6 md:space-y-0 rounded-lg z-10 mt-0   ">
        {/* Logo and Title */}

        <div className="text-center lg:flex lg:flex-col lg:justify-center items-center   ">
          <img
            className="object-cover w-1/3 lg:w-1/2"
            src={LogoImg}
            alt="Logo"
          />
        </div>

        {/* Sign Up Form */}
        <form
          data-ajax="true"
          method="post"
          className="md:min-h-screen space-y-4 p-8 px-1 md:px-14 bg-[#0000008F] backdrop-filter backdrop-blur md:backdrop-blur-none"
          style={{ zIndex: "1", borderRadius: "15px" }}
          action="/signup"
        >
          {/* Sign Up Heading */}
          <h2 className="text-white text-5xl mb-10    text-center font-extrabold">
            Sign Up
          </h2>

          {/* Name Fields */}
          <div className="flex  gap-2">
            <div className="flex flex-col w-1/2 ">
              <input
                type="text"
                placeholder="First Name"
                className="text-[0.7rem] lg:text-sm h-[3rem] md:h-[4.125rem] w-full px-4 py-2 text-white  bg-[#00000036]   focus:outline-none focus:ring-2 focus:ring-slate-500 border border-white"
                data-val="true"
                data-val-regex="Invalid format"
                data-val-regex-pattern="^[\u0621-\u064A\u0660-\u0669a-zA-Z\s]&#x2B;$"
                data-val-required=" this field is required."
                id="FirstName"
                name="FirstName"
                value=""
              />
              <span
                className="text-red-500 text-start w-full text-[0.7rem] lg:text-sm   field-validation-valid"
                data-valmsg-for="FirstName"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div className="flex flex-col w-1/2 ">
              <input
                type="text"
                placeholder="Last Name"
                className="text-[0.7rem] lg:text-sm h-[3rem] md:h-[4.125rem] w-full px-4 py-2 text-white   bg-[#00000036]   focus:outline-none focus:ring-2 focus:ring-slate-500 border border-white"
                data-val="true"
                data-val-regex="Invalid format"
                data-val-regex-pattern="^[\u0621-\u064A\u0660-\u0669a-zA-Z\s]&#x2B;$"
                data-val-required=" this field is required."
                id="LastName"
                name="LastName"
                value=""
              />
              <span
                className="text-red-500 text-start w-full text-[0.7rem] lg:text-sm   field-validation-valid"
                data-valmsg-for="LastName"
                data-valmsg-replace="true"
              ></span>
            </div>
          </div>

          <div className="flex  gap-2">
            <div className="flex flex-col w-1/2 ">
              <input
                name="Email"
                type="email"
                placeholder="Email"
                className="h-[3rem] md:h-[4.125rem] w-full px-3 py-2 pe-0 text-white bg-black bg-opacity-25 text-[0.7rem] lg:text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 border border-white"
                data-val="true"
                data-val-email="The Email field is not a valid e-mail address."
                data-val-required=" this field is required."
                id="Email"
                value=""
              />
              <span
                className="text-red-500 text-start w-full text-[0.7rem] lg:text-sm   field-validation-valid"
                data-valmsg-for="Email"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div className="flex flex-col w-1/2 ">
              <div className="flex w-full">
                <div className="relative inline-flex w-1/2">
                  {/* Input with Datalist */}
                  <input
                    name="CountryCode"
                    autocomplete="+20"
                    list="countryCodeList"
                    id="countryCodeInput"
                    value="&#x2B;20"
                    pattern="^\+\d{1,3}$"
                    className="h-[3rem] md:h-[4.125rem] text-[0.7rem] lg:text-sm w-full appearance-none inline-flex items-center pl-2 md:px-2 bg-[#00000036] text-white text-sm border border-white border-e-0 rounded-s-[15px] rounded-e-none"
                    oninput="filterCountryCodes()"
                    type="text"
                    data-val="true"
                    data-val-regex="Invalid Country Code format"
                    data-val-regex-pattern="^\&#x2B;\d{1,3}$"
                    data-val-required=" this field is required."
                  />

                  {/* Datalist for country codes */}
                  <datalist
                    id="countryCodeList"
                    className="rounded-s-none"
                    autocomplete="off"
                  >
                    <option value="&#x2B;44">&#x2B;44</option>
                    <option value="&#x2B;49">&#x2B;49</option>
                    <option value="&#x2B;33">&#x2B;33</option>
                    <option value="&#x2B;39">&#x2B;39</option>
                    <option value="&#x2B;34">&#x2B;34</option>
                    <option value="&#x2B;31">&#x2B;31</option>
                    <option value="&#x2B;41">&#x2B;41</option>
                    <option value="&#x2B;46">&#x2B;46</option>
                    <option value="&#x2B;351">&#x2B;351</option>
                    <option value="&#x2B;36">&#x2B;36</option>
                    <option value="&#x2B;43">&#x2B;43</option>
                    <option value="&#x2B;32">&#x2B;32</option>
                    <option value="&#x2B;420">&#x2B;420</option>
                    <option value="&#x2B;45">&#x2B;45</option>
                    <option value="&#x2B;353">&#x2B;353</option>
                    <option value="&#x2B;372">&#x2B;372</option>
                    <option value="&#x2B;370">&#x2B;370</option>
                    <option value="&#x2B;371">&#x2B;371</option>
                    <option value="&#x2B;381">&#x2B;381</option>
                    <option value="&#x2B;386">&#x2B;386</option>
                    <option value="&#x2B;358">&#x2B;358</option>
                    <option value="&#x2B;359">&#x2B;359</option>
                    <option value="&#x2B;380">&#x2B;380</option>
                    <option value="&#x2B;373">&#x2B;373</option>
                    <option value="&#x2B;354">&#x2B;354</option>
                    <option value="&#x2B;372">&#x2B;372</option>
                    <option value="&#x2B;387">&#x2B;387</option>
                    <option value="&#x2B;1">&#x2B;1</option>
                    <option value="&#x2B;1">&#x2B;1</option>
                    <option value="&#x2B;55">&#x2B;55</option>
                    <option value="&#x2B;52">&#x2B;52</option>
                    <option value="&#x2B;57">&#x2B;57</option>
                    <option value="&#x2B;54">&#x2B;54</option>
                    <option value="&#x2B;56">&#x2B;56</option>
                    <option value="&#x2B;51">&#x2B;51</option>
                    <option value="&#x2B;598">&#x2B;598</option>
                    <option value="&#x2B;505">&#x2B;505</option>
                    <option value="&#x2B;503">&#x2B;503</option>
                    <option value="&#x2B;504">&#x2B;504</option>
                    <option value="&#x2B;595">&#x2B;595</option>
                    <option value="&#x2B;1-787">&#x2B;1-787</option>
                    <option value="&#x2B;1-809">&#x2B;1-809</option>
                    <option value="&#x2B;20">&#x2B;20</option>
                    <option value="&#x2B;966">&#x2B;966</option>
                    <option value="&#x2B;971">&#x2B;971</option>
                    <option value="&#x2B;98">&#x2B;98</option>
                    <option value="&#x2B;964">&#x2B;964</option>
                    <option value="&#x2B;963">&#x2B;963</option>
                    <option value="&#x2B;970">&#x2B;970</option>
                    <option value="&#x2B;965">&#x2B;965</option>
                    <option value="&#x2B;966">&#x2B;966</option>
                    <option value="&#x2B;968">&#x2B;968</option>
                    <option value="&#x2B;974">&#x2B;974</option>
                    {/* Add more country codes as needed */}
                  </datalist>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-3/4 border-r border-white"></div>
                </div>

                <input
                  name="Phone"
                  maxlength="11"
                  type="text"
                  placeholder="Phone Number"
                  className="h-[3rem] md:h-[4.125rem] w-full px-4 py-2 text-white bg-[#00000036] text-[0.7rem] lg:text-sm  border-t border-r border-b border-white rounded-e-[15px] rounded-s-none "
                  data-val="true"
                  data-val-phone="The Phone field is not a valid phone number."
                  data-val-required=" this field is required."
                  id="Phone"
                  value=""
                />
              </div>
              <span
                className="text-red-500 text-start w-full text-[0.7rem] lg:text-sm   field-validation-valid"
                data-valmsg-for="Phone"
                data-valmsg-replace="true"
              ></span>
              <p
                id="countryCodeError"
                className=" hidden text-red-500 text-start w-full text-[0.7rem] lg:text-sm "
              >
                Invalid country code. Please select from the list.
              </p>
            </div>
          </div>

          {/* Password Fields */}
          <div className="flex  gap-2">
            <div className="flex flex-col w-1/2 ">
              <div className="relative w-full">
                <input
                  name="Password"
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="text-[0.7rem] lg:text-sm h-[3rem] md:h-[4.125rem] w-full px-4 py-2 text-white bg-[#00000036]   focus:outline-none focus:ring-2 focus:ring-slate-500 border border-white"
                  data-val="true"
                  data-val-required=" this field is required."
                />
                <i
                  className="fas fa-eye absolute top-4 md:top-5  rtl:left-3 ltr:right-3 md:text-lg text-white cursor-pointer"
                  onClick="togglePasswordVisibility('password', this)"
                ></i>
              </div>
              <span
                className="text-red-500 text-start w-full text-[0.7rem] lg:text-sm   field-validation-valid"
                data-valmsg-for="Password"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div className="flex flex-col w-1/2 ">
              <div className="relative w-full">
                <input
                  name="Comfirm_Password"
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  className="text-[0.7rem] lg:text-sm h-[3rem] md:h-[4.125rem] w-full px-4 py-2 text-white bg-[#00000036]   focus:outline-none focus:ring-2 focus:ring-slate-500 border border-white"
                  data-val="true"
                  data-val-equalto="The password and confirmation password do not match."
                  data-val-equalto-other="*.Password"
                  data-val-required=" this field is required."
                />
                <i
                  className="fas fa-eye absolute top-4 md:top-5  rtl:left-3 ltr:right-3 md:text-lg text-white cursor-pointer"
                  onClick="togglePasswordVisibility('confirm-password', this)"
                ></i>
              </div>
              <span
                className="text-red-500 text-start w-full text-[0.7rem] lg:text-sm   field-validation-valid"
                data-valmsg-for="Comfirm_Password"
                data-valmsg-replace="true"
              ></span>
            </div>
          </div>

          <div
            className="flex justify-around space-x-4 items-center m-auto p-4 border border-white  w-full  "
            style={{ borderRadius: "15px" }}
          >
            <div className="flex items-center justify-center">
              <input
                name="Role"
                type="checkbox"
                className="accent-[#6555FF]  hover:accent-[#6555FF] w-5 h-5 "
                value="Chef"
                id="Foodies"
                autocomplete="off"
                checked
                disabled
              />
              <label
                id="foodies"
                className="inline-flex items-center cursor-pointer ml-2 text-white font-bold text-xl	 md:text-2xl"
                for="Foodies"
              >
                Foodies
              </label>
            </div>

            {/* Chefs Option */}
            <div className="flex items-center justify-center">
              <input
                name="Role"
                type="checkbox"
                className="accent-[#6555FF] hover:accent-[#6555FF] w-5 h-5 "
                id="Chefs"
                autocomplete="off"
                data-val="true"
                data-val-required="The Role field is required."
                value="true"
              />
              <label
                id="chefs"
                className="inline-flex items-center cursor-pointer ml-2 text-white font-bold text-xl	 md:text-2xl"
                for="Chefs"
              >
                chef
              </label>
            </div>
          </div>

          {/* Sign In Link */}

          {/* Sign Up Button */}
          <button
            type="submit"
            style={{ height: "40.76px" }}
            className="w-full  bg-[#4136A3] mt-6 text-white font-bold text-2xl  focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
          <p className="text-base	font-medium	 text-white text-start">
            already have an account?{" "}
            <a className="text-blue-500 hover:underline" href="/signin">
              Sign In
            </a>
          </p>

          {/* OR Divider */}
          <div className="flex items-center justify-center my-4">
            <div className="w-1/4 border-t border-gray-300"></div>
            <span className="text-white mx-3 font-medium text-xl">OR</span>
            <div className="w-1/4 border-t border-gray-300"></div>
          </div>

          {/* Sign Up with Google Button */}

          <div id="googleFoodie" className="mt-8">
            <a
              id="element1"
              name="provider"
              style={{ height: "39.42px", color: "#464343" }}
              className="w-full mt-4 bg-white text-xl	  font-bold	 py-2 rounded-lg flex items-center justify-center shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              href="/ExternalLogin?provider=Google&amp;role=Foodies"
            >
              <img src={GoogleImg} alt="Google Icon" className="w-5 h-5 mr-2" />
              Sign Up with Google
            </a>
          </div>
          <div id="googleChef" className="mt-8 hidden">
            <a
              id="element2"
              name="provider"
              style={{ height: "39.42px", color: "#464343" }}
              className=" w-full mt-4 bg-white text-xl	  font-bold	 py-2 rounded-lg flex items-center justify-center shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              href="/ExternalLogin?provider=Google&amp;role=Chef"
            >
              <img src={GoogleImg} alt="Google Icon" className="w-5 h-5 mr-2" />
              Sign Up with Google
            </a>
          </div>
          <input
            name="__RequestVerificationToken"
            type="hidden"
            value="CfDJ8ICOFCB3jYVCrhBqO-ZqA5aTopWx47EN1eVOjs1sDvUOYKZ8_suBkUTQCWX_Z0idNsq2VAgNRxfVIoGeOtBoAsAYBAvSIy0imxjdpGLvtMcvcxlV72rLNmqX1iLAgVui04C65sPlgTJVFkwEzcdwOlM"
          />
          <input name="Role" type="hidden" value="false" />
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
