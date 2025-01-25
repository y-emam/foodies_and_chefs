import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/Home";
import NoPage from "./pages/NoPage/Page";
import SignInPage from "./pages/SignIn/Page";
import SignUpPage from "./pages/SignUp/Page";
import ForgotPasswordPage from "./pages/ForgotPassword/Page";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { useEffect } from "react";
import EventsPage from "./pages/Events/Pages";
import CreateEventsPage from "./pages/Events/Create/Page";
import Footer from "./components/Footer/Component";
// import MenusPage from "./pages/Menus/Page";
import CreateMenuPage from "./pages/Menus/Create/Page";
import ProfilePage from "./pages/Profile/Page";
import EditProfilePage from "./pages/Profile/Edit/Page";
import InvitesPage from "./pages/Invites/Pages";
import Navbar from "./components/Navbar/Component";

function App() {
  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  });

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="App">
          {/* Navbar */}
          <Navbar />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Authentication */}
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* Events */}
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/create" element={<CreateEventsPage />} />

            {/* Menu Pages */}
            {/* Commented because low performance */}
            {/* <Route path="/menus" element={<MenusPage />} /> */}

            <Route path="/menus/create" element={<CreateMenuPage />} />

            {/* Profile Pages */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/edit" element={<EditProfilePage />} />

            {/* Invites Pages */}
            <Route path="/invites" element={<InvitesPage />} />

            {/* Handling any other route */}
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </I18nextProvider>
  );
}

export default App;
