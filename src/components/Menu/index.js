import React from "react"
import Style from '../Menu/style'
import { Link, animateScroll as scroll } from "react-scroll";
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
const Menu = () => {
    // margin - right: auto;
    return (
        <>
            <Style>
        
                <ul>
                    <div className="sociais">

                        <li> <FaLinkedinIn /></li>
                        <li> <FaGithub /></li>
                        <li> <FaInstagram /></li>
                    </div>
                    <li>
                        <Link
                            activeclass="active"
                            to="inicio"
                            spy={true} 
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >START</Link>

                    </li>
                    <li>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >ABOUT</Link>
                    </li>

                    <li>
                        <Link
                          
                            to="exp"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >CONTACT</Link>

                    </li>
                </ul>

            </Style>
        </>
    )
}


export default Menu