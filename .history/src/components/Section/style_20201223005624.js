
import React from 'react'
import Styled from 'styled-components'
let teste = (props => props.background);
console.log('res', teste)

const Sectio = Styled.div`
   

    background: ${(props => props.background ? props.background : "#222929")};
height: 320px;
display: inline - grid;
width: -webkit - fill - available;
      

    .item - faixa {
    background: #030323;
    height: 482px;

}

`
export default Section
