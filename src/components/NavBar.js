import React, { useState } from 'react';
import '../assets/scss/NavBar.scss'
import Logo from '../assets/img/search.png'
import More from '../assets/img/more.png';
import Cross from '../assets/img/cross.jpg';

const NavBar = ()  => {

    const[search,setSearch] = useState(true);

    const searchIcon = () => {
        setSearch(!search)
    }
    if(search)
    {
        return (
            <div className="Main">
                <div className="heading">
                    foton
                </div>
                <div className="content">
                    <h4><a href="./AllMeetings.js">HOME</a></h4>
                    <h4><a href="./AllMeetings.js">PAGES</a></h4>
                    <h4><a href="./AllMeetings.js">PORTFOLIO</a></h4>
                    <h4><a href="./AllMeetings.js">BLOG</a></h4>
                    <h4><a href="./AllMeetings.js">SHOP</a></h4>
                    <h4><a href="./AllMeetings.js">ELEMENTS</a></h4>
                </div>
                <div className="last">
                    <img src={Logo}  alt="logo" onClick={searchIcon}/>
                    <img src={More} alt="logo"/>
                </div>
            </div>
        )    
    } else {
        return (
            <div className="Main">
                <div className="heading">
                    <img src={Logo}  alt="logo" onClick={searchIcon}/>
                </div>
                <div className="content-2">
                    <input type="text" placeholder="Type your text"></input>
                </div>
                <div className="last">
                    <img src={Cross} alt="logo" onClick={searchIcon}/>
                </div>
            </div>
        )
    }
    
}

export default NavBar;