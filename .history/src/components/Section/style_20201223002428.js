
import React from 'react'
import Styled from 'styled-components'
console.log(props => props.background ? props.background : "#222929");
if (props => props.background) {
    console.log('e dvd')

}
const Section = Styled.div`
    ${(props => props.background) 

    background: ${(props => props.background) ?: 'blue'};
height: 320px;
display: inline - grid;
width: -webkit - fill - available;
      

    .item - faixa {
    background: #030323;
    height: 482px;

}






`
export default Section
