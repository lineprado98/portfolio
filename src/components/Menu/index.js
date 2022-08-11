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

                        <li> <a href="https://www.linkedin.com/in/aline-prado-dev1998" target="_blank"><FaLinkedinIn/></a></li>
                        <li> <a href="https://github.com/lineprado98" target="_blank"><FaGithub /></a></li>
            
                    </div>
                    <li>
                        <Link
                            activeclass="active"
                            to="inicio"
                            spy={true} 
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Início</Link>

                    </li>
                    <li>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >Sobre</Link>
                    </li>

                    {/* <li>
                        <Link
                          
                            to="exp"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Contato</Link>

                    </li> */}
                </ul>

            </Style>
        </>
    )
}


export default Menu