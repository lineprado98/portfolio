
import React from 'react'
import Styled from 'styled-components'
console.log(props => props.background ? props.background : "#222929");

const Section = Styled.div`
   

    background: ${props => props.background ? props.background : blue};
    height: 320px;
    display: inline-grid;
    width: -webkit-fill-available;
      

    .item-faixa {   
    background:#030323;
    height: 482px;

    }


  

  
    
`
export default Section
