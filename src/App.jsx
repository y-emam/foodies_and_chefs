import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/Page";
import NoPage from "./pages/NoPage/Page";
import SignInPage from "./pages/SignIn/Page";
import SignUpPage from "./pages/SignUp/Page";
import ForgotPasswordPage from "./pages/ForgotPassword/Page";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  });

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/SignIn" element={<SignInPage />} />
            <Route path="/SignUp" element={<SignUpPage />} />
            <Route path="/ForgotPassword" element={<ForgotPasswordPage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
