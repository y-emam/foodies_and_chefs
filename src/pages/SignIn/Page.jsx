import LogoImg from "../../assets/images/logo.webp";
import GoogleImg from "../../assets/images/Google.webp";
import "./styles.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function SignInPage() {
  const { t } = useTranslation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="SignInPage">
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center hero-section">
        <div className="absolute md:top-1 top-5 rtl:right-5 md:rtl:right-9 ltr:left-5 md:ltr:left-9 z-20">
          <img className="h-auto w-1/4 md:w-1/6" src={LogoImg} alt="Logo" />
        </div>

        <div
          className="p-8 rounded-lg sm:w-75 md:w-full max-w-md"
          style={{ background: "#000000A3", zIndex: 1 }}
        >
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-white">
              {t("signin.signin")}
            </h1>
          </div>
          <form data-ajax="true" method="post" action="/signin">
            <div className="mb-4 flex flex-col">
              <label htmlFor="email" className="sr-only">
                {t("signin.email")}
              </label>
              <input
                type="email"
                name="EmailAddress"
                autoComplete="on"
                id="email"
                placeholder={t("signin.email")}
                className="input-bg w-full px-4 py-2 text-gray-900 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                data-val="true"
                data-val-email="The EmailAddress field is not a valid e-mail address."
                data-val-required="This field is required."
              />
              <span
                className="text-red-500 text-start w-full field-validation-valid"
                data-valmsg-for="EmailAddress"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div className="mb-4 relative flex flex-col">
              <label htmlFor="password" className="sr-only">
                {t("signin.password")}
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                name="Password"
                autoComplete="on"
                id="password"
                placeholder={t("signin.password")}
                className="input-bg w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pe-10"
                data-val="true"
                data-val-required="This field is required."
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-2.5 ltr:right-0 rtl:left-0 px-3 flex items-center bg-transparent"
              >
                <i
                  id="eyeIcon"
                  className={`fas fa-eye${
                    passwordVisible ? "-slash" : ""
                  } text-sm text-white`}
                ></i>
              </button>
              <span
                className="text-red-500 text-start w-full field-validation-valid"
                data-valmsg-for="Password"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div className="flex flex-col items-start justify-between text-sm text-white leading-relaxed">
              <a
                className="hover:underline text-blue-500"
                href="/forgot-password"
              >
                {t("signin.forgotPassword")}
              </a>
              <span>
                {t("signin.dontHaveAccount")}{" "}
                <a className="hover:underline text-blue-500" href="/signup">
                  {t("signin.createAccount")}
                </a>
              </span>
            </div>
            <button
              type="submit"
              style={{ height: "40.76px" }}
              className="w-full mt-6 text-white font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {t("signin.signin")}
            </button>
            <input
              name="__RequestVerificationToken"
              type="hidden"
              value="CfDJ8ICOFCB3jYVCrhBqO-ZqA5YoxEDKKSqieTgalOPmxUpXDvJuUM-WLDLz_Zek3VuBbFws8CiTpml6lFp6xUtmVmrdqsqGfabz4IftZIh4_8f8gbU6Zvl6HWWuMi35WsfLoFpwGhea_yHiIjGlK-0Ga-g"
            />
          </form>
          <div className="flex items-center justify-center my-4 w-3/4 mx-auto">
            <div className="border-t border-white flex-grow mr-3"></div>
            <span className="text-white font-medium">OR</span>
            <div className="border-t border-white flex-grow ml-3"></div>
          </div>
          <a
            name="provider"
            style={{ fontSize: "18px", height: "39.42px", color: "#464343" }}
            className="w-full mt-4 bg-white font-semibold py-2 rounded-lg flex items-center justify-center shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            href="/ExternalLogin?provider=Google&amp;fromSignin=true"
          >
            <img src={GoogleImg} alt="Google Icon" className="w-5 h-5 mr-2" />
            {t("signin.signinWithGoogle")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
