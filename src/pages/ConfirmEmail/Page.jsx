import { useEffect, useState } from "react";
import LogoImg from "../../assets/images/logo.webp";
import "./styles.css";

function ConfirmEmail() {
  const [email, setEmail] = useState("yasser@gmail.com");
  const [resetTimerLeft, setResetTimerLeft] = useState(60);
  const [isResetDisabled, setIsResetDisabled] = useState(true);

  useEffect(() => {
    setEmail((email) =>
      email.replace(
        /(.{3})(.*)(@.*)/,
        (_, a, b, c) => a + b.replace(/./g, "*") + c
      )
    );
  }, [email]);

  useEffect(() => {
    if (resetTimerLeft > 0) {
      const timer = setInterval(() => {
        setResetTimerLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setIsResetDisabled(false);
    }
  }, [resetTimerLeft]);

  const handleReset = () => {
    setResetTimerLeft(60);
    setIsResetDisabled(true);
  };

  return (
    <main className="min-h-screen overflow-auto" id="app-body">
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center hero-section">
        <div className="absolute md:top-1 top-5 sm:left-3 md:left-9">
          <img
            className="img-fluid w-1/4 h-1/4 md:w-1/6"
            src={LogoImg}
            alt="logo"
          />
        </div>

        <div className="p-8 rounded-lg sm:w-75 md:w-full max-w-md z-10 h-96 bg-black bg-opacity-60">
          {/* OTP Input Boxes */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-white">Check your email</h1>
          </div>
          <div className="text-center mb-6">
            <p className="text-[16px] font-medium text-[#9D9D9D]">
              please enter the six digit verification code we sent to {email}
            </p>
          </div>

          <div
            className="flex justify-center space-x-4 mb-5 text-white"
            dir="auto"
          >
            <input
              type="text"
              maxLength="1"
              className="otp-input w-8 h-8 md:w-12 md:h-12 text-2xl text-center border-2 border-gray-500 bg-gray-600 bg-opacity-10 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-400 focus:outline-none"
            />
            <input
              type="text"
              maxLength="1"
              className="otp-input w-8 h-8 md:w-12 md:h-12 text-2xl text-center border-2 border-gray-500 bg-gray-600 bg-opacity-10 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-400 focus:outline-none"
            />
            <input
              type="text"
              maxLength="1"
              className="otp-input w-8 h-8 md:w-12 md:h-12 text-2xl text-center border-2 border-gray-500 bg-gray-600 bg-opacity-10 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-400 focus:outline-none"
            />
            <input
              type="text"
              maxLength="1"
              className="otp-input w-8 h-8 md:w-12 md:h-12 text-2xl text-center border-2 border-gray-500 bg-gray-600 bg-opacity-10 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-400 focus:outline-none"
            />
            <input
              type="text"
              maxLength="1"
              className="otp-input w-8 h-8 md:w-12 md:h-12 text-2xl text-center border-2 border-gray-500 bg-gray-600 bg-opacity-10 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-400 focus:outline-none"
            />
            <input
              type="text"
              maxLength="1"
              className="otp-input w-8 h-8 md:w-12 md:h-12 text-2xl text-center border-2 border-gray-500 bg-gray-600 bg-opacity-10 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-400 focus:outline-none"
            />
            {/* Repeat for other OTP inputs */}
          </div>

          <span
            id="error"
            className="hidden font-medium text-red-600 text-[10px] md:text-[12px] mb-6"
          >
            Invalid code, please try again.
          </span>

          {/* Confirm Button */}
          <button
            id="confirm-btn"
            className="flex justify-center items-center m-auto w-72 h-12 bg-[#4136A3] text-white text-xl rounded-lg shadow-md hover:bg-transparent hover:border-4 hover:border-[#4136A3] hover:text-[#4136A3] focus:outline-none"
          >
            <span id="btn-text">Confirm</span>
            <div id="loading-spinner" className="hidden spinner"></div>
          </button>

          {/* Resend Section */}
          <div className="mt-4 text-sm text-gray-300">
            <span>Didn&#x27;t get the email? </span>
            <button
              onClick={handleReset}
              id="resend-link"
              className={`text-lg bg-transparent 
                ltr:mr-1 rtl:ml-1 
                ${
                  isResetDisabled
                    ? "cursor-not-allowed text-gray-400 font-medium"
                    : "text-main-color font-bold"
                }`}
            >
              Resend
            </button>
            <span id="timer" className="text-main-color font-medium">
              in{" "}
              {`${Math.floor(resetTimerLeft / 60)}:${(resetTimerLeft % 60)
                .toString()
                .padStart(2, "0")}`}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ConfirmEmail;
