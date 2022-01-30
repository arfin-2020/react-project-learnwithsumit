import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Quiz from "./components/Pages/Quiz";
import SignUp from "./components/Pages/SignUp";
import PrivateOutlet from "./components/PrivateOutlet";
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

            

            {/* I know this way very goodly */}

            {/* <Route
              exact
              path="/quiz"
              element={
                <PrivateRouter>
                  <Quiz />
                </PrivateRouter>
              }
            />
            <Route
              exact
              path="/result"
              element={
                <PrivateRouter>
                  <Result />
                </PrivateRouter>
              }
            /> */}

            {/* nested routing */}

            <Route path="/*" element={<PrivateOutlet />}>
              <Route path="result" element={<Result />} />
              <Route path="quiz" element={<Quiz />} />
            </Route>
            <Route exact path="/:pageName" element={<PageNotFound />} />
          
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
