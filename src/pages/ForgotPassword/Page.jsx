import LogoImg from "../../assets/images/Logo.png";
import "./styles.css";

function ForgotPasswordPage() {
  return (
    <div class="min-h-screen flex items-center justify-center bg-cover bg-center hero-section ">
      <div class="absolute md:top-1 top-5  left-5 md:left-9 z-20">
        <img class="h-auto w-1/4 md:w-1/6" src={LogoImg} alt="Logo" />
      </div>

      <form
        class="flex flex-col p-8 rounded-lg sm:w-75 md:w-full max-w-md z-10 bg-[#000000A3] h-[60vh] md:h-[80vh] justify-center "
        action="/forgot-password"
        method="post"
      >
        <div class="text-center mb-6">
          <h1 class="text-3xl font-bold text-white">Forget password</h1>
          <h3 class="text-[16px] font-medium text-[#9D9D9D]">
            No worries, we&#x2019;ll send your reset instructions
          </h3>
        </div>
        <div class="mb-4 flex flex-col">
          <label for="email" class="text-white text-start">
            Email
          </label>
          <input
            name="Email"
            type="email"
            autocomplete="on"
            id="email"
            placeholder="Email"
            value=""
            class="input-bg w-full px-4 py-2 text-gray-900 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-val="true"
            data-val-email="The Email field is not a valid e-mail address."
            data-val-required="The Email field is required."
          />
          <span
            class="text-red-500 text-start w-full field-validation-valid"
            data-valmsg-for="Email"
            data-valmsg-replace="true"
          ></span>
        </div>
        <button
          type="submit"
          style={{ height: "40.76px" }}
          class="w-full mt-6 text-white font-bold  focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Password reset
        </button>
        <div class="text-center my-6">
          <a class="text-white" href="/signin">
            <i class="fa-solid fa-arrow-left mx-2"></i>Back to log in
          </a>
        </div>
        <input
          name="__RequestVerificationToken"
          type="hidden"
          value="CfDJ8ICOFCB3jYVCrhBqO-ZqA5YtuVGx3j7FSR6UJnX0y9MgLf-f9F5Emxmj2sLkWjufgem6ZSt6cKOmGFkTwjigJoJ2qV8WKLCq6NiJn_leV5Og-9AqiE1Cbvu8prtfz_C_YnD-EcVl8FicqBUy0sMd46A"
        />
      </form>
    </div>
  );
}

export default ForgotPasswordPage;
