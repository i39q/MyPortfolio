import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Navigation/Home/Home"
import Projects from "./components/Navigation/Projects/Projects"
import ProjectPage from "./components/Navigation/Projects/ProjectPage/ProjectPage";
import Contacts from "./components/Navigation/Contacts/Contacts"


import "./reset.css"
import "./app.css";

function App() {
  return (
    <>
        <Router>
              <Header />

              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Home" element={<Home />}/>
                <Route path="/Projects" element={<Projects /> }/>
                <Route path="/ProjectPage/:id" element={<ProjectPage />} />
                <Route path="/Contacts" element={<Contacts />}/>
              </Routes>

              <Footer />
        </Router>
    </>
  );
}

export default App;
