import React from 'react';
import NavBar from './NavBar';
import headerPortrait from '../Images/hcuellar-small.jpg'
import { useSpring, animated } from 'react-spring';

function Header() {

    return (
        <div className="header-image">
            <NavBar />
            <div className="header-name">Heriberto Cuellar <br /></div>
            <div className="header-title">Full Stack Developer</div>
            <img className="header-portrait" src={headerPortrait} />
        </div>
    )
}

export default Header;
