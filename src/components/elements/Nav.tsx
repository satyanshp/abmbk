import React from 'react'
import {
  Link
} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => {
  return (
    <div className='app__navbar'>
        <div className='app__navbar__header'>
          <Link to='*' style={{textDecoration:'none',color:'#00305B'}}>ABMK LAW CHAMBERS</Link>
        </div>
        <div><AnchorLink href='#home' style={{textDecoration:'none',color:'#000000'}}><Link to='*' style={{textDecoration:'none',color:'#00305B'}}>HOME</Link></AnchorLink></div>
        <div><AnchorLink href='#about' style={{textDecoration:'none',color:'#000000'}}>ABOUT US</AnchorLink></div>
        <div><AnchorLink href='#practice' style={{textDecoration:'none',color:'#000000'}}>PRACTICE AREAS</AnchorLink></div>
        <div><AnchorLink href='#home' style={{textDecoration:'none',color:'#000000'}}>COUNSELS</AnchorLink></div>
        <div><Link to='/blog' style={{textDecoration:'none',color:'#000000'}}>ABMK LAW BLOG</Link></div>
        <div><AnchorLink href='#contact' style={{textDecoration:'none',color:'#000000'}}>CONTACT</AnchorLink></div>
    </div>
  )
}

export default Nav