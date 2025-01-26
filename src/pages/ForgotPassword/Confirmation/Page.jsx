import { useTranslation } from "react-i18next";
import LogoImg from "../../../assets/images/logo.webp";
import { useParams } from "react-router-dom";

function ForgotPasswordConfirmationPage() {
  const { t } = useTranslation();
  const { email } = useParams();

  const handleResend = () => {
    window.location.href = "/signin";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center hero-section ">
      <div className="absolute md:top-1 top-5  left-5 md:left-9 z-20">
        <img className="h-auto  w-1/4 md:w-1/6" src={LogoImg} alt="Logo" />
      </div>

      <div className="flex flex-col p-8 rounded-lg sm:w-75 md:w-full max-w-md z-10 bg-[#000000A3] h-[60vh] md:h-[80vh] justify-center ">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            {t("forgotPassword.confirmationPage.checkYourEmail")}
          </h1>
          <h3 className="text-[16px] font-medium text-[#9D9D9D]">
            {t("forgotPassword.confirmationPage.description")}
            <br />
            {email}
          </h3>
        </div>

        <form
          method="post"
          className="text-center my-6"
          action="/forgotPassword"
        >
          <input
            type="hidden"
            name="Email"
            value="tahemob221@fundapk.com"
            data-val="true"
            data-val-email="The Email field is not a valid e-mail address."
            data-val-required="The Email field is required."
            id="Email"
          />
          <p className="text-white">
            {t("forgotPassword.confirmationPage.didntReceiveEmail")}{" "}
            <button
              type="submit"
              style={{ font: "inherit" }}
              className="bg-transparent text-main-color font-medium hover:underline"
            >
              {t("forgotPassword.confirmationPage.resend")}
            </button>
          </p>
        </form>
        <div className="text-center my-6">
          <a className="text-white hover:underline" href="/signin">
            <i className="fa-solid fa-arrow-left mx-2"></i>
            {t("forgotPassword.confirmationPage.backToSignin")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordConfirmationPage;
