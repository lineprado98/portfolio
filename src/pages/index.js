
import React from "react"

import Section from '../components/Section/'
import Menu from '../components/Menu'
import Header from '../components/Header'
import NodeLogo from "../../public/images/node.svg"
import VueLogo from "../../public/images/vue.svg"
import LaravelLogo from "../../public/images/laravel.svg"
import AngularLogo from "../../public/images/angular.svg"
import ReactLogo from "../../public/images/react.svg"
import NestLogo from "../../public/images/nestjs.svg"




import { Link, animateScroll as scroll } from "react-scroll";
import { BsSlash, BsCodeSlash, BsCode, BsChevronCompactDown } from "react-icons/bs"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
function Index() {


    return (

        <div>
            <Header>
                <Menu></Menu>
            </Header>

            <Section >
                <div id="inicio" className="section-header">
              
                <div  className='d-flex justify-content-center mb-4'>
                        <div md='6' className='text-center justify-content-center mt-5 text-white'>
                            <div className="  mb-3" style={{ height: "300px" }}>
                            
                           </div>
                           <h2>  Aline Prado Barbosa  </h2>
                            <div> Developer</div>
                           <div className="icon-arrow">
                                <Link
                                    poster={true}
                                    activeStyle={true}
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <BsChevronCompactDown size="25%" /></Link></div>

                        </div>
                    </div>
                </div>
            </Section>



            {/* <Section background={'white'}>
                <div id="about">
                <div className="  mb-3" style={{ height: "250px" }}>
                            
                            </div>
                <div className=' d-flex justify-content-around' >

                        <img width={150} src={NestLogo}/>

                        <img width={150} src={ReactLogo}/>

                        <img width={150} src={NodeLogo}/>

                        <img width={150} src={AngularLogo}/>

                        <img width={150} src={LaravelLogo}/>

                    </div>
                </div>
            </Section> */}




        </div >
    )

}
{/* <script> */ }
console.log('aqui');
// </script>

export default Index
