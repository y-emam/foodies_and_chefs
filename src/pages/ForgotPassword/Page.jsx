import { useTranslation } from "react-i18next";
import LogoImg from "../../assets/images/logo.webp";
import "./styles.css";

function ForgotPasswordPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center hero-section">
      <div className="absolute md:top-1 top-5 ltr:left-5 rtl:right-5 md:ltr:left-9 md:rtl:right-9 z-20">
        <img className="h-auto w-1/4 md:w-1/6" src={LogoImg} alt="Logo" />
      </div>

      <form
        className="flex flex-col p-8 rounded-lg sm:w-75 md:w-full max-w-md z-10 bg-[#000000A3] h-[50vh] md:h-[80vh] justify-center"
        action="/forgot-password"
        method="post"
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            {t("forgotPassword.forgotPassword")}
          </h1>
          <h3 className="text-[16px] font-medium text-[#9D9D9D]">
            {t("forgotPassword.description")}
          </h3>
        </div>
        <div className="mb-4 flex flex-col">
          <label for="email" className="text-white text-start mb-2">
            {t("forgotPassword.email")}
          </label>
          <input
            name="Email"
            type="email"
            autocomplete="on"
            id="email"
            placeholder={t("forgotPassword.emailPlaceholder")}
            value=""
            className="input-bg w-full px-4 py-2 text-gray-900 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-val="true"
            data-val-email="The Email field is not a valid e-mail address."
            data-val-required="The Email field is required."
          />
          <span
            className="text-red-500 text-start w-full field-validation-valid"
            data-valmsg-for="Email"
            data-valmsg-replace="true"
          ></span>
        </div>
        <button
          type="submit"
          style={{ height: "40.76px" }}
          className="w-full mt-6 text-white font-bold  focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {t("forgotPassword.sendResetLink")}
        </button>
        <div className="text-center my-6">
          <a className="text-white" href="/signin">
            <i className="fa-solid fa-arrow-left mx-2"></i>
            {t("forgotPassword.backToSignin")}
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
