import React, { useRef } from "react"
import Avatar from '../components/Avatar'
import Section from '../components/Section/'
import Sobre from '../components/Sobre'
import Container from '../components/Container'
import Faixa from '../components/Faixa'
import Menu from '../components/Menu'
import Header from '../components/Header'
import Style from '../components/Menu/style'
function Index() {


    return (

        <div>
            <Header>
                <Menu></Menu>
            </Header>

            <Section>
                <div className="section-header">
                    <Container>
                        <Faixa>
                            <div className='item item-faixa subir'>
                                <div className="content">
                                    <Avatar></Avatar>
                                </div>
                            </div>
                        </Faixa>
                        <div className='item '>
                            <Sobre>
                                <h2>Aline Prado Barbosa</h2>
                                <span className="spann"> Dev Full Stack</span>
                            </Sobre>
                        </div>

                    </Container>
                </div>

            </Section>
            <Section background={'#fdfdff'} >
                <div className="experiencias correr ">
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

export default Index



