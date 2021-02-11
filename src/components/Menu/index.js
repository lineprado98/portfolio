import React from "react"
import Style from '../Menu/style'
import { Link, animateScroll as scroll } from "react-scroll";

const Menu = () => {

    return (
        <>
            <Style>
                <ul>

                    <li>
                        <Link
                            activeClass="active"
                            to="inicio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Home</Link>

                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="sobre"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Sobre</Link>
                    </li>

                    <li>
                        <Link
                            activeClass="active"
                            to="exp"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Experiências</Link>

                    </li>
                </ul>

            </Style>
        </>
    )
}


export default Menu