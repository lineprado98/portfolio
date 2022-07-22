
import React from 'react'
import Styled from 'styled-components'
import fundo from "../../../public/images/line24.png"
const Section = Styled.div`

  width:100%;
  height: 100vh;

    .section-header {
    background:url(${fundo})no-repeat bottom center scroll;;
    display: table;
    width:100%;
    height: 100vh;
    padding: 100px 0;
    color: white;
    background-position: 30% 45%;
    background-size: cover;

    }


     @media(max-width:768px) {
        .section-header {
            background:url(${fundo})no-repeat bottom center scroll;;
            display: table;
            width:100vh;
            height: 100vh;
            padding: 100px 0;
            color: white;
            background-position: 30% 45%;
            background-size: cover;
          
        }


    }

    

 


`



export default Section
