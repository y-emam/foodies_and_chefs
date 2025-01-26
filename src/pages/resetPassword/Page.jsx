import LogoImg from "../../assets/images/logo.webp";

function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center hero-section ">
      <div className="absolute md:top-1 top-5  left-5 md:left-9 z-20">
        <img className="h-auto w-1/4 md:w-1/6" src={LogoImg} alt="Logo" />
      </div>

      <form
        className="flex flex-col p-8 rounded-lg sm:w-75 md:w-full max-w-md z-10 bg-[#000000A3] h-[60vh] md:h-[80vh] justify-center "
        action="/UserEvent/ResetPassword"
        method="post"
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">Forget password</h1>
          <h3 className="text-[16px] font-medium text-[#9D9D9D]">
            No worries, we&#x2019;ll send your reset instructions
          </h3>
        </div>
        <div className="mb-4 flex flex-col relative">
          <label htmlFor="NewPassword" className="text-white text-start">
            Password
          </label>
          <input
            name="NewPassword"
            type="password"
            autocomplete="on"
            id="NewPassword"
            placeholder="New Password"
            value=""
            className="input-bg w-full px-4 py-2 text-gray-900 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-val="true"
            data-val-required=" this field is required."
          />
          <i
            className="fas fa-eye absolute top-9 md:top-7 end-3 md:text-lg text-white cursor-pointer"
            onClick="togglePasswordVisibility('NewPassword', this)"
          ></i>

          <span
            className="text-red-500 text-start w-full field-validation-valid"
            data-valmsg-for="NewPassword"
            data-valmsg-replace="true"
          ></span>
        </div>
        <div className="mb-4 flex flex-col relative">
          <label htmlFor="Comfirm_Password" className="text-white text-start">
            Confirm Password
          </label>
          <input
            name="Comfirm_Password"
            type="password"
            autocomplete="on"
            id="Comfirm_Password"
            placeholder="Confirm Password"
            value=""
            className="input-bg w-full px-4 py-2 text-gray-900 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-val="true"
            data-val-equalto="The password and confirmation password do not match."
            data-val-equalto-other="*.NewPassword"
            data-val-required=" this field is required."
          />
          <i
            className="fas fa-eye absolute top-9 md:top-7 end-3 md:text-lg text-white cursor-pointer"
            onClick="togglePasswordVisibility('Comfirm_Password', this)"
          ></i>

          <span
            className="text-red-500 text-start w-full field-validation-valid"
            data-valmsg-for="Comfirm_Password"
            data-valmsg-replace="true"
          ></span>
        </div>

        <button
          type="submit"
          style={{ height: "40.76px" }}
          className="w-full mt-6 text-white font-bold  focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Reset Password
        </button>
        <div className="text-center my-6">
          <a className="text-white" href="/UserEvent/SignIn">
            <i className="fa-solid fa-arrow-left mx-2"></i>Back to log in
          </a>
        </div>
      </form>
    </div>
  );
}

export default ResetPasswordPage;
