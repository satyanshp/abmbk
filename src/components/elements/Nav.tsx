import React from 'react'
import {
  Link 
} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface NavProps{
  sectionActive:number;
  onClick1:()=>void;
  onClick2:()=>void;
  onClick3:()=>void;
  onClick4:()=>void;
  onClick5:()=>void;
  onClick6:()=>void;
}
const Nav = ({sectionActive,onClick5,onClick1,onClick2,onClick3,onClick4,onClick6}:NavProps) => {
  return (
    <div className='app__navbar'>
        <div className='app__navbar__header'>
          <Link to='*' style={{textDecoration:'none',color:'#00305B !important'}}>ABMK LAW CHAMBERS</Link>
        </div>
        <div className='app__navbar__sub'>
          <div className='app__navbar__links' onClick={()=>onClick1()}><AnchorLink href='' style={{textDecoration:'none',color:'#000000'}}><Link to='*' style={{textDecoration:'none',color:sectionActive === 0?'#0F4C85':'#000000'}}>HOME</Link></AnchorLink></div>
          <div className='app__navbar__links' onClick={()=>onClick2()}><Link to='*' style={{textDecoration:'none',color:sectionActive === 2?'#0F4C85':'#000000'}}>ABOUT US</Link></div>
          <div className='app__navbar__links' onClick={()=>onClick3()}><Link to='*' style={{textDecoration:'none',color:sectionActive === 3?'#0F4C85':'#000000'}}>PRACTICE AREAS</Link></div>
          <div className='app__navbar__links' onClick={()=>onClick4()}><Link to='*' style={{textDecoration:'none',color:sectionActive === 4?'#0F4C85':'#000000'}}>COUNSELS</Link></div>
          <div className='app__navbar__links' onClick={()=>onClick5()}><Link to='/blog' style={{textDecoration:'none',color:sectionActive === 5?'#0F4C85':'#000000'}}>ABMK LAW BLOG</Link></div>
          <div className='app__navbar__links' onClick={()=>onClick6()}><Link to='*' style={{cursor:'pointer',textDecoration:'none',color:sectionActive === 6?'#0F4C85':'#000000'}}>CONTACT</Link></div>
        </div>
    </div>
  )
}

export default Nav