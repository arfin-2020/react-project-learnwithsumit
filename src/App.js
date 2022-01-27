import Layout from "./components/Layout";
import "./components/style/App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from "./components/Pages/SignUp";
import Quiz from "./components/Pages/Quiz";
import Result from "./components/Result";
import Home from "./components/Pages/Home";
import Login from './components/Pages/Login'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path='/signup' element={<SignUp/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/quiz' element={<Quiz/>} />
          <Route exact path='/result' element={<Result/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
