import React from "react"
import Avatar from '../components/Avatar'
import Section from '../components/Section/'
import Sobre from '../components/Sobre'
import Container from '../components/Container'
import Faixa from '../components/Faixa'
function Index() {

    return (
        <div>
            <Section>
                <Container>
                    <div className='item'>
                        <div className="content">
                            <Avatar></Avatar>
                        </div>
                    </div>
                
                        <div className='item'>
                            <Sobre>
                                <h2>Aline Prado Barbosa</h2>
                                <span className="spann"> Dev Full Stack</span>
                            </Sobre>
                        </div>
                    </Faixa>

                </Container>


                {/* <img src="https://meuamigopet.com.br/wp-content/uploads/2019/10/pitbull-terrier-am%C3%A9ricain-80916843.jpg" alt="Vercel Logo" className="logo" /> */}
            </Section>
        </div >
    )

}

export default Index



