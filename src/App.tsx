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
import { Button } from '@mui/material';
import Hamburger from 'hamburger-react';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import OpenedBlog from './components/elements/subelement/OpenedBlog';

function App() {
  const [popup, setPopup] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [liked, setLiked] = useState(false);
  const [blogData,setBlogData] =useState([
    {
      title:"S.11: Scope of Judicial Review when maintainability objections are 'plainly arguable'",
      author:'ABMK LAW CHAMBERS',
      time:'2 min',
      date:'Mar 13',
      img:'/assets/images/home.webp',
      overview:'In a case titled Mohammed Masroor Shaikh Vs. Bharat Bhushan Gupta & Ors. Civil Appeal No.  874 of 2022 where an Appeal was preferred before the Supreme Court against a S. 11 Order of the Single Judge, Bombay High Court appointing an arbitrator, after objections under S. 16 were dismissed, the Supreme Court vide its final order and judgment dated 02.02.2022 declined to interfere with the High Court order observing that the issues of maintainability are to be preferred before the arbitral tribunal. Relying on the case of Vidya Drolia & Ors. vs. Durga Trading Corporation, (2021) 2 SCC 1, the Apex Court held that the contentions of non-maintainability are to be raised before the arbitral tribunal if they are ‘plainly arguable’. Since a Section 34 petition was pending adjudication, which has been preferred against the dismissal of objections taken in S. 16 proceedings, the Court held that it was open to the Appellant to raise issues of non-maintainability and the time barred claims in the Section 34 proceedings.In the facts of the matter, a notice under S. 11 of the Arbitration and Conciliation Act, 1996 was served upon the respondents therein along with a copy of the Section 11 petition. However, it was not communicated as to when the matter would come up before the Court for hearing. When the Section 11 petition was infact taken up by the Single Judge, Bombay High Court, despite such service the respondents therein did not appear. The Single Judge relied upon the affidavit of service filed by the Petitioner therein and appointed an Arbitrator without issuance of Notice to the Appellants.The Supreme Court took judicial notice of a long standing and consistent practice by the Original Side of the Bombay High Court which is that the advocates serve a notice of proceedings filed in the court even before the matter comes up before the Court. The Court acts upon such service effected by the advocate on proof being produced in the form of an affidavit of service.',
      views:'26',
      comments:'0',
      likes:'1',
      liked:false,
    },
    {
      title:"S.11: Scope of Judicial Review when maintainability objections are 'plainly arguable'",
      author:'ABMK LAW CHAMBERS',
      time:'2 min',
      date:'Mar 13',
      img:'',
      overview:'In a case titled Mohammed Masroor Shaikh Vs. Bharat Bhushan Gupta & Ors. Civil Appeal No.  874 of 2022 where an Appeal was preferred before the Supreme Court against a S. 11 Order of the Single Judge, Bombay High Court appointing an arbitrator, after objections under S. 16 were dismissed, the Supreme Court vide its final order and judgment dated 02.02.2022 declined to interfere with the High Court order observing that the issues of maintainability are to be preferred before the arbitral tribunal. Relying on the case of Vidya Drolia & Ors. vs. Durga Trading Corporation, (2021) 2 SCC 1, the Apex Court held that the contentions of non-maintainability are to be raised before the arbitral tribunal if they are ‘plainly arguable’. Since a Section 34 petition was pending adjudication, which has been preferred against the dismissal of objections taken in S. 16 proceedings, the Court held that it was open to the Appellant to raise issues of non-maintainability and the time barred claims in the Section 34 proceedings.In the facts of the matter, a notice under S. 11 of the Arbitration and Conciliation Act, 1996 was served upon the respondents therein along with a copy of the Section 11 petition. However, it was not communicated as to when the matter would come up before the Court for hearing. When the Section 11 petition was infact taken up by the Single Judge, Bombay High Court, despite such service the respondents therein did not appear. The Single Judge relied upon the affidavit of service filed by the Petitioner therein and appointed an Arbitrator without issuance of Notice to the Appellants.The Supreme Court took judicial notice of a long standing and consistent practice by the Original Side of the Bombay High Court which is that the advocates serve a notice of proceedings filed in the court even before the matter comes up before the Court. The Court acts upon such service effected by the advocate on proof being produced in the form of an affidavit of service.',
      views:'26',
      comments:'0',
      likes:'1',
      liked:false,
    },
  ]);
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
  // for popup notice
  React.useEffect(() => {
    let popup = setTimeout(()=>setPopup(true),1000);
      return () => {
        clearTimeout(popup);
      };
  }, []);

// to hide resposive scroll to top
  const [scrollTopVisible, setScrollTopVisible] = useState(false)
  React.useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
       window.removeEventListener("scroll", listenToScroll);
  }, [])

  const listenToScroll=()=>{
    if(window.pageYOffset > 600){
      setScrollTopVisible(true);
    }
    let show = setTimeout(()=>setScrollTopVisible(false),5000);
    return () => {
      clearTimeout(show);
    };

  }

  const [navigate, setNavigate] = useState(false);
  
  const onClick1 = () =>{
    window.scrollTo({top: homeTop,behavior: "smooth"})
    setSectionActive(0);
    setNavigate(!navigate);
    setOpen(false);
  }
  const onClick2 = () =>{
    window.scrollTo({top: aboutTop,behavior: "smooth"})
    setSectionActive(2);
    setNavigate(!navigate);
    setOpen(false);
  }
  const onClick3 = () =>{
    window.scrollTo({top: practiceTop,behavior: "smooth"})
    setSectionActive(3);
    setNavigate(!navigate);
    setOpen(false);
  }
  const onClick4 = () =>{
    window.scrollTo({top: homeTop,behavior: "smooth"})
    setSectionActive(4);
    setNavigate(!navigate);
    setOpen(false);
  }
  const onClick5 = () =>{
    setSectionActive(5);
    setOpen(false);
  }
  const onClick6 = () =>{
    window.scrollTo({top: contactTop,behavior: "smooth"})
    setSectionActive(6);
    setNavigate(!navigate);
    setOpen(false);
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

  const [isOpen, setOpen] = React.useState(false);

  const [blogOpened, setBlogOpened] = useState(false);

//   interface blogDataIndex:{
//     title:string,
//     author:string,
//     time:string,
//     date:string,
//     img:string,
//     overview:string,
//     views:string,
//     comments:string,
//     likes:string,
//     liked:boolean,
// };
  const [indexOpenedBlog, setIndexOpenedBlog] = useState<{title:string,author:string,time:string,date:string,img:string,overview:string,views:string,comments:string,likes:string,liked:boolean,}>({
    title:'',
    author:'',
    time:'',
    date:'',
    img:'',
    overview:'',
    views:'',
    comments:'',
    likes:'',
    liked:false,
  })

  const onClickBlog = (index:number) => {
    setIndexOpenedBlog(blogData[index]);
    setBlogOpened(true);
    console.log('click')
  }

  return (
    <Router>
      <div className="App">
        <Nav 
          isOpen={isOpen}
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
            <>
              {!blogOpened && 
                <Blogs 
                  searchOpen={searchOpen} 
                  onClickSearch={()=>setSearchOpen(true)} 
                  onClickClose={()=>setSearchOpen(false)} 
                  liked={liked} 
                  onClickLike={()=>setLiked(!liked)}
                  verMenu={verMenu}
                  onClickVerMenu={()=>setVerMenu(!verMenu)}
                  onClick5={onClick5}
                  blogData={blogData}
                  onClickBlog={onClickBlog}
                  onClickBlogNavLinks={()=>setBlogOpened(false)}
                />  
              }
              {blogOpened && 
                <OpenedBlog 
                  searchOpen={searchOpen} 
                  onClickSearch={()=>setSearchOpen(true)} 
                  onClickClose={()=>setSearchOpen(false)} 
                  liked={liked} 
                  onClickLike={()=>setLiked(!liked)}
                  verMenu={verMenu}
                  onClickVerMenu={()=>setVerMenu(!verMenu)}
                  onClick5={onClick5}
                  blogData={indexOpenedBlog}
                  onClickBlogNavLinks={()=>setBlogOpened(false)}
                /> 
              }
            </>        
            } />
          {/* <Route path = "/blog/open" element={
            <OpenedBlog 
              searchOpen={searchOpen} 
              onClickSearch={()=>setSearchOpen(true)} 
              onClickClose={()=>setSearchOpen(false)} 
              liked={liked} 
              onClickLike={()=>setLiked(!liked)}
              verMenu={verMenu}
              onClickVerMenu={()=>setVerMenu(!verMenu)}
              onClick5={onClick5}
              blogData={indexOpenedBlog}
            />          
            } /> */}
        </Routes>
        {popup && <Notice onClick={()=>setPopup(false)}/>}
        <Box position='fixed' display={{xs:'none',md:'block'}} zIndex='30' bottom='0' right='3vh'>
          <Button variant='contained'sx={{background:'rgb(15, 76, 133)',color:'#FFFFFF',fontFamily: "'Raleway', sans-serif",borderRadius:'0',height:'8vh',width:'13vw',fontSize:'1.1rem',display:'flex',alignItems:'center'}}>CHAT WITH US!</Button>
        </Box>
        <Box position='fixed' display={{xs:'block',md:'none'}} zIndex='30' top='3vh' right='3vh'>
          <Button variant='contained'
              sx={{
                background:'#FFFFFF !important',
                boxShadow:'none !important',
                borderRadius:'0',
                height:'55px',
                width:'55px',
                minWidth:'55px !important',
                display:'flex',
                alignItems:'center',
                padding:'0',
              }}
            >
            <Hamburger toggled={isOpen} toggle={setOpen} color='#000000' duration={0.8} size={25} />
          </Button>
        </Box>
        <Box position='fixed' display={{xs:'block',md:'none'}} zIndex='10' bottom='3vh' right='2vh'>
          <Button variant='contained'
            style={{
              borderRadius:'50%',
              height:'5rem',
              width:'5rem',
              background:'rgb(15, 76, 133)'
            }}
          >
            <ChatRoundedIcon sx={{color:'#FFFFFF',fontSize:'2rem'}} />
          </Button>
        </Box>
        <Box position='fixed' className={scrollTopVisible?'app__res__scrollToTop active':'app__res__scrollToTop'} display={{xs:'block',md:'none'}} onClick={()=>window.scrollTo({top: 0,behavior: "smooth"})} zIndex='10' bottom='10vh' left='2vh'>
          <Button variant='contained'
            style={{
              borderRadius:'0',
              height:'4rem',
              width:'4rem',
              aspectRatio:'1',
              border:'1px solid #FFFFFF',
              background:'rgb(15, 76, 133)'
            }}
          >
            <ArrowBackIosNewIcon sx={{color:'#FFFFFF',fontSize:'2rem',transform:'rotate(90deg)',fontWeight:'300'}} />
          </Button>
        </Box>
        {isOpen && <Box display={{md:'none'}} position='fixed' top='0' bottom='0' left='0' right='0' sx={{background:'rgb(0,0,0,0.5)'}} zIndex='15'></Box>}
      </div>
    </Router>
  );
}

export default App;
