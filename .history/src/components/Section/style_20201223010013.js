
import React from 'react'
import Styled from 'styled-components'


// const Sectio = Styled.div`


//     background: ${(props => props.background ? props.background : "#222929")};
// height: 320px;
// display: inline - grid;
// width: -webkit - fill - available;


//     .item - faixa {
//     background: #030323;
//     height: 482px;

// }

// `

const Section = ({ background }) => {
    return (Styled.div`
height: 320px;
display: inline - grid;
width: -webkit - fill - available;


    .item - faixa {
    background: #030323;
    height: 482px;

}`)
}
export default Section
