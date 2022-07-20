
import React from 'react'
import Styled from 'styled-components'
import fundo from "../../../public/images/line24.png"
const Section = Styled.div`


    background: ${ (props => props.background ? props.background : "#222929")};

    height: 660px;
    width: -webkit - fill - available;
    .item-faixa {
    height: 482px;
    margin-top: 35%!important;
    }

    h3 {
        margin:0px!important;
    }
    .section-header {
     background-Image:url(${fundo});
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100%
    }

    .experiencias {
        justify-content:center;
        font-size:25px;
        display:flex;
        padding: 5% 5% 5% 35%;

        .item-exp {
            width: 70%;
        }
     
    }

     @media(max-width:768px) {
        height: 100%;
        .item-faixa {
            height:10%;
        }

        .section-header {
        // Efeito corte faixa do avatar
          height: 100%; 
        }
        .experiencias{
           justfy-content:center;
           padding:0px;
            .item-exp{
                width: 90%
            }
        }
    }

 


`



export default Section
