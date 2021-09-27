import React from "react"
import { Text } from "react"
import Avatar from '../components/Avatar'
import Section from '../components/Section/'
import About from '../components/About'
import Container from '../components/Container'
import Faixa from '../components/Faixa'
import Menu from '../components/Menu'
import Header from '../components/Header'
import { Link, animateScroll as scroll } from "react-scroll";
import { BsSlash, BsCodeSlash, BsCode, BsChevronCompactDown } from "react-icons/bs"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
function Index() {


    return (

        <div>
            <Header>
                <Menu></Menu>
            </Header>

            <Section background={'#1b1c23'} >
                <div id="inicio" className="section-header">
                    <Container>
                        <Faixa>
                            <div className='item item-faixa subir'>
                                <div className="content">
                                    <Avatar></Avatar>

                                </div>
                            </div>
                        </Faixa>
                        <div className='item '>
                            <About>
                                <h2>  Aline Prado Barbosa  </h2>
                                <div class="flex">
                                    <div styled="font-size:20px"> Desenvolvedora</div>
                                </div>
                              
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
                                    <BsChevronCompactDown size="20%" /></Link></div>
                            </About>
                        </div>

                    </Container>
                </div>
            </Section>


            <Section >
                <div id="about" className="experiencias correr ">
                    <div className="item-exp ">
                        <span>
                            Sou desenvolvedora Junior, com dois anos de experiência na empresa DOWHILE.
                            Tenho 22 anos, atualmente estou cursando Análise e desenvolvimento de Sistemas no 4º semestre
                            na Instituição Fadergs.
                        </span>
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



