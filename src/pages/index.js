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
            </Header>

            <Section>

                <Container>
                    <Faixa>
                        <div className='item item-faixa'>
                            <div className="content">
                                <Avatar></Avatar>
                            </div>
                        </div>
                    </Faixa>
                    <div className='item'>
                        <Sobre>
                            <h2>Aline Prado Barbosa</h2>
                            <span className="spann"> Dev Full Stack</span>
                        </Sobre>
                    </div>
                </Container>
            </Section>
            {/* <Section background="#dedeea"></Section>
            <Section background="red"></Section>
            <Section background="black"></Section> */}
        </div >
    )

}

export default Index



