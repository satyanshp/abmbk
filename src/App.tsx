import React, { useState } from 'react';
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
  Routes
} from "react-router-dom";
import Slider from './components/elements/Slider';
import Blogs from './components/elements/Blogs';
import Box from '@mui/material/Box';

function App() {
  const [popup, setPopup] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [liked, setLiked] = useState(false);
  const blogData =[
    {
      title:"S.11: Scope of Judicial Review when maintainability objections are 'plainly arguable'",
      author:'ABMK LAW CHAMBERS',
      time:'2 min',
      date:'Mar 13',
      overview:'In a case titled Mohammed Masroor Shaikh Vs. Bharat Bhushan Gupta & Ors. Civil Appeal No. 874 of 2022 where an Appeal was preferred...',
      views:'',
      comments:'',
      likes:'',
      liked:false,
    }
  ];
  const [verMenu, setVerMenu] = useState(false);
  const [sectionActive, setSectionActive] = React.useState(0);

  //refrence of sections
  const homeRef = React.useRef< null | HTMLDivElement>(null);
  const aboutRef = React.useRef<null | HTMLDivElement>(null);
  const practiceRef = React.useRef<null | HTMLDivElement>(null);
  const contactRef = React.useRef<null | HTMLDivElement>(null);
 //sections heights
  const homeActive:number = (homeRef.current ? homeRef.current.offsetTop + homeRef.current.clientHeight - window.innerHeight*15/100 : 0);
  const aboutActive:number = (aboutRef.current ? aboutRef.current.offsetTop + aboutRef.current.clientHeight - window.innerHeight*15/100 : 0);
  const practiceActive:number = (practiceRef.current ? practiceRef.current.offsetTop + practiceRef.current.clientHeight - window.innerHeight*15/100 : 0);
  const contactActive:number = (contactRef.current ? contactRef.current.offsetTop + contactRef.current.clientHeight - window.innerHeight*15/100 : 0);
  //sections top
  const homeTop:number = homeRef.current ? homeRef.current.offsetTop - window.innerHeight*15/100:0;
  const aboutTop:number = aboutRef.current ? aboutRef.current.offsetTop - window.innerHeight*14/100:0;
  const practiceTop:number = practiceRef.current ? practiceRef.current.offsetTop - window.innerHeight*14/100:0;
  const contactTop:number = contactRef.current ? contactRef.current.offsetTop - window.innerHeight*14/100:0;

  const toggleVisibility=()=>{
    if (window.pageYOffset < homeActive) {
      setSectionActive(0);
    } 
    else if((window.pageYOffset < aboutActive && window.pageYOffset > homeActive)) {
      setSectionActive(2);
    }
    else if((window.pageYOffset < practiceActive && window.pageYOffset > aboutActive)) {
      setSectionActive(3);
    }
    else if((window.pageYOffset < contactActive && window.pageYOffset > practiceActive)) {
      setSectionActive(6);
    }
  };
  window.addEventListener("scroll", toggleVisibility);
  React.useEffect(() => {
    let popup = setTimeout(()=>setPopup(true),1000);
      return () => {
        clearTimeout(popup);
      };
  }, []);
  const [navigate, setNavigate] = useState(false);
  
  const onClick1 = () =>{
    window.scrollTo({top: homeTop,behavior: "smooth"})
    setSectionActive(0);
    setNavigate(!navigate);
  }
  const onClick2 = () =>{
    window.scrollTo({top: aboutTop,behavior: "smooth"})
    setSectionActive(2);
    setNavigate(!navigate);
  }
  const onClick3 = () =>{
    window.scrollTo({top: practiceTop,behavior: "smooth"})
    setSectionActive(3);
    setNavigate(!navigate);
  }
  const onClick4 = () =>{
    window.scrollTo({top: homeTop,behavior: "smooth"})
    setSectionActive(4);
    setNavigate(!navigate);
  }
  const onClick5 = () =>{
    setSectionActive(5);
  }
  const onClick6 = () =>{
    window.scrollTo({top: contactTop,behavior: "smooth"})
    setSectionActive(6);
    setNavigate(!navigate);
  };
  //to Scroll to element from different link
  React.useEffect(() => {
    if(sectionActive===0){
      window.scrollTo({top: homeRef.current ? homeRef.current.offsetTop - window.innerHeight*15/100:0,behavior: "smooth"})
    }
    else if(sectionActive===2){
      window.scrollTo({top: aboutRef.current ? aboutRef.current.offsetTop - window.innerHeight*14/100:0,behavior: "smooth"})
    }
    else if(sectionActive===3){
      window.scrollTo({top: practiceRef.current ? practiceRef.current.offsetTop - window.innerHeight*14/100:0,behavior: "smooth"})
    }
    else if(sectionActive===4){
      window.scrollTo({top: homeRef.current ? homeRef.current.offsetTop - window.innerHeight*15/100:0,behavior: "smooth"})
    }
    else if(sectionActive===6){
      window.scrollTo({top: contactRef.current ? contactRef.current.offsetTop - window.innerHeight*14/100:0,behavior: "smooth"})
    }
  }, [navigate]);
  return (
    <Router>
      <div className="App">
        <Nav 
          sectionActive={sectionActive} 
          onClick1={onClick1}
          onClick2={onClick2}
          onClick3={onClick3}
          onClick4={onClick4}
          onClick5={onClick5}
          onClick6={onClick6}
        />
        <Routes>
          <Route path = "*" element={
            <>
            <Box ref={homeRef}><Home/></Box>
            <Box ref={aboutRef}><About/></Box>
            <Box ref={practiceRef}><Practice/></Box>
            <Slider/>
            <Box ref={contactRef}><Contact contactActive={contactRef.current ? contactRef.current.clientHeight : 0}/></Box>
            <Footer/>
            </>           
            } />
          <Route path = "/blog" element={
            <Blogs 
              searchOpen={searchOpen} 
              onClickSearch={()=>setSearchOpen(true)} 
              onClickClose={()=>setSearchOpen(false)} 
              liked={liked} 
              onClickLike={()=>setLiked(!liked)}
              verMenu={verMenu}
              onClickVerMenu={()=>setVerMenu(!verMenu)}
              onClick5={onClick5}
            />          
            } />
        </Routes>
        {popup && <Notice onClick={()=>setPopup(false)}/>}
      </div>
    </Router>
  );
}

export default App;
