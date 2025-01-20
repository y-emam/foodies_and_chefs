import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/Home";
import NoPage from "./pages/NoPage/Page";
import SignInPage from "./pages/SignIn/Page";
import SignUpPage from "./pages/SignUp/Page";
import ForgotPasswordPage from "./pages/ForgotPassword/Page";

function App() {
  return (
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
  );
}

export default App;
