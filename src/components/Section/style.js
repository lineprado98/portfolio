
import React from 'react'
import Styled from 'styled-components'
import fundo from "../../../public/images/fundo-500x290.png"
const Section = Styled.div`


    background: ${ (props => props.background ? props.background : "#222929")};
    height: 350px;

    width: -webkit - fill - available;



    .item-faixa {
   // background: #030323;
    height: 482px;
    margin-top: 55px;
    }

    h3{
        margin:0px!important;
    }
.section-header {
     background-Image:url(${fundo});
   // background-image: url("https://cdn.pixabay.com/photo/2020/10/16/22/54/woman-5660786_960_720.png");
    background-repeat: no-repeat;
    // background-size: 50%;
    background-position-y: 41px;
    background-position-x: right;
    
}

    .experiencias{
        justify-content:center;
        font-size:25px;
        display:flex;
        padding: 5% 5% 5% 35%;

     .item-exp{
               width: 70%;
        }
     
       
     
    }

     @media(max-width:768px) {
 
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
