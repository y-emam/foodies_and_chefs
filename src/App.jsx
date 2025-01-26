import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/Home";
import NoPage from "./pages/NoPage/Page";
import SignInPage from "./pages/SignIn/Page";
import SignUpPage from "./pages/SignUp/Page";
import ForgotPasswordPage from "./pages/ForgotPassword/Page";
import i18n from "./i18n";
import { useEffect } from "react";
import EventsPage from "./pages/Events/Pages";
import CreateEventsPage from "./pages/Events/Create/Page";
import Footer from "./components/Footer/Component";
import ProfilePage from "./pages/Profile/Page";
import EditProfilePage from "./pages/Profile/Edit/Page";
import InvitesPage from "./pages/Invites/Pages";
import Navbar from "./components/Navbar/Component";
import VerifyOtpPage from "./pages/VerifyOtp/Page";
import ForgotPasswordConfirmationPage from "./pages/ForgotPassword/Confirmation/Page";

function App() {
  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  });

  return (
    <div className="App">
      <Router>
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Authentication */}
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
          <Route
            path="/forgotPassword/:email"
            element={<ForgotPasswordConfirmationPage />}
          />
          <Route path="/verifyOtp" element={<VerifyOtpPage />} />

          {/* Events */}
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/create" element={<CreateEventsPage />} />

          {/* Menu Pages */}
          {/* Commented because low performance */}
          {/* <Route path="/menus" element={<MenusPage />} /> */}

          {/* <Route path="/menus/create" element={<CreateMenuPage />} /> */}

          {/* Profile Pages */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<EditProfilePage />} />

          {/* Invites Pages */}
          <Route path="/invites" element={<InvitesPage />} />

          {/* Handling any other route */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
