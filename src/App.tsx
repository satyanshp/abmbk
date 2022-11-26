import React from 'react';
import './App.css';
import About from './components/elements/About';
import Contact from './components/elements/Contact';
import Footer from './components/elements/Footer';
import Home from './components/elements/Home';
import Nav from './components/elements/Nav';
import Notice from './components/elements/Notice';
import Practice from './components/elements/Practice';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Slider from './components/elements/Slider';
import Blogs from './components/elements/Blogs';
import Auth from './components/elements/Auth';

function App() {
  const [popup, setPopup] = React.useState(false);
  
  // React.useEffect(() => {
  //   let popup = setTimeout(()=>setPopup(true),1000);

  //     return () => {
  //       clearTimeout(popup);
  //     };
  // }, []);
  
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path = "*" element={
            <>
              <Home/>
              <About/>
              <Practice/>
              <Slider/>
              <Contact/>
              <Footer/>
            </>           
            } />
          <Route path = "/blog" element={
            <Blogs/>          
            } />
        </Routes>
        {popup && <Notice onClick={()=>setPopup(false)}/>}
        {popup && <Auth onClick={()=>setPopup(false)}/>}
      </div>
    </Router>
  );
}

export default App;
