import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Quiz from "./components/Pages/Quiz";
import SignUp from "./components/Pages/SignUp";
import Result from "./components/Result";
import "./components/style/App.css";
import AuthProvider from "./Context/AuthContext";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/quiz" element={<Quiz />} />
            <Route exact path="/result" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
