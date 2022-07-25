
import React from "react"

import Section from '../components/Section/'
import Menu from '../components/Menu'
import Header from '../components/Header'
import NodeLogo from "../../public/images/node.svg"
import VueLogo from "../../public/images/vue.svg"
import LaravelLogo from "../../public/images/laravel.svg"
import FlutterLogo from "../../public/images/flutter.svg"
import AngularLogo from "../../public/images/angular.svg"
import ReactLogo from "../../public/images/react.svg"
import NestLogo from "../../public/images/nestjs.svg"




import { Link, animateScroll as scroll } from "react-scroll";
import { BsSlash, BsCodeSlash, BsCode, BsChevronCompactDown } from "react-icons/bs"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
function Index() {


    return (

        <div className="column">
            <Header>
                <Menu></Menu>
            </Header>

            <Section>

                <div id="inicio" className="section-header">
                    <div className="flex column">
                        <div className=" mt-16 justify-content-center text-center">

                            <h2 color="primary" >  Aline Prado  </h2>
                            <div> Developer</div>
                            <div className="icon-arrow">
                                <Link
                              
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    <BsChevronCompactDown size="10%" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>


            <Section>
                <div id="about" className="flex list2 ">
                <div className=" cardItem iam ">


                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec elit convallis, hendrerit felis ut, aliquam elit. Maecenas accumsan lacus libero. Maecenas elit felis, luctus nec bibendum dignissim, porta sed tortor. Praesent vestibulum, tellus et malesuada tempus, dui ipsum pharetra metus, vel maximus ipsum lacus ut quam. Duis porta lacus massa, eget pellentesque dui faucibus ut. 
                </div>
                <div className="cardItem">
                <div  className=" list  flex justify-content-space-evenly p-top-2">

                    <img className="icon-technology" src={NestLogo} />

                    <img className="icon-technology" src={ReactLogo} />

                    <img className="icon-technology" src={NodeLogo} />
                    <img className="icon-technology" src={AngularLogo} />
                    <img className="icon-technology" src={FlutterLogo} />

                    <img className="icon-technology" src={LaravelLogo} />

                </div>
                </div>
                 </div>
            </Section>


        </div >
    )

}
{/* <script> */ }
console.log('aqui');
// </script>

export default Index
