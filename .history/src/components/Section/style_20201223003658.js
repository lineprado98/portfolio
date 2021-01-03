
import React from 'react'
import Styled from 'styled-components'


const Section = Styled.div`
   

    background: ${props => props.props.background ? 'red' : "#222929"};
    height: 320px;
    display: inline-grid;
    width: -webkit-fill-available;
      

    .item-faixa {   
    background:#030323;
    height: 482px;

    }


  

  
    
`
export default Section
