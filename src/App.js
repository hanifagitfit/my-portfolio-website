import Navbar from "./components/Navbar";
import Main from "./components/Main";
import More from "./components/More";

import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Contact from "./components/Contact";
import Resume from "./components/Resume";


function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/more' element={< More />}></Route>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
