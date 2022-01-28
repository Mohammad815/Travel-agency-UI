import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Header from './components/Header/Header';
import Login from './components/Login/Login';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="portfolio" element={<Portfolio />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="addproject" element={<AddProject />} /> */}
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
       
          {/* <Route path="projects/:projectId" element={<ProjectDetails />} />
          <Route path="blog" element={<Blog />} /> */}
        </Routes>
     
    </BrowserRouter>
    </div>
  );
}

export default App;
