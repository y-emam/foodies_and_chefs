import { useState } from "react";
import LogoImg from "../../assets/images/logo.webp";

function ResetPasswordPage() {
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = (id, iconId) => {
    const input = document.getElementById(id);
    const icon = document.getElementById(iconId);

    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center hero-section ">
      <div className="absolute md:top-1 top-5  left-5 md:left-9 z-20">
        <img className="h-auto w-1/4 md:w-1/6" src={LogoImg} alt="Logo" />
      </div>

      <div className="flex flex-col p-8 rounded-lg sm:w-75 md:w-full max-w-md z-10 bg-[#000000A3] h-[60vh] md:h-[80vh] justify-center ">
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
            autoComplete="on"
            id="NewPassword"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-bg w-full px-4 py-2 text-gray-900 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-val="true"
            data-val-required=" this field is required."
          />
          <i
            id="NewPasswordIcon"
            className="fas fa-eye absolute top-9 md:top-7 end-3 md:text-lg text-white cursor-pointer"
            onClick={() =>
              togglePasswordVisibility("NewPassword", "NewPasswordIcon")
            }
          ></i>

          <span
            className="text-red-500 text-start w-full field-validation-valid"
            data-valmsg-for="NewPassword"
            data-valmsg-replace="true"
          ></span>
        </div>
        <div className="mb-4 flex flex-col relative">
          <label className="text-white text-start">Confirm Password</label>
          <input
            type="password"
            autoComplete="on"
            id="ConfirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input-bg w-full px-4 py-2 text-gray-900 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-val="true"
            data-val-equalto="The password and confirmation password do not match."
            data-val-equalto-other="*.NewPassword"
            data-val-required=" this field is required."
          />
          <i
            id="ConfirmPasswordIcon"
            className="fas fa-eye absolute top-9 md:top-7 end-3 md:text-lg text-white cursor-pointer"
            onClick={() =>
              togglePasswordVisibility("ConfirmPassword", "ConfirmPasswordIcon")
            }
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
          onClick={handleSubmit}
        >
          Reset Password
        </button>
        <div className="text-center my-6">
          <a className="text-white" href="/signin">
            <i className="fa-solid fa-arrow-left mx-2"></i>Back to log in
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
