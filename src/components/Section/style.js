
import React from 'react'
import Styled from 'styled-components'
import fundo from "../../../public/images/line24.png"
const Section = Styled.div`

    height:100vh;
    width: 100vw;

   .section-header {
    background:url(${fundo})no-repeat bottom center scroll;
    display: table;
    height:100vh;
    width: 100vw;
   // padding: 100px 0;
    color: white;
    background-position: 30% 45%;
    background-size: cover;

    }
    @media(max-width: 800px) {
      background:red;
      height:100hv;
    }


 


`



export default Section
