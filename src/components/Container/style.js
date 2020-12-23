
import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`

    display: flex;
    justify-content: space-around;
    
    .item {      
	/* O flex: 1; é necessário para que cada item se expanda ocupando o tamanho máximo do container. */
	flex: 0.3; 
	text-align: center;
    font-size: 1.5em;

        span {
        margin:5px;
        color :white;
        }
        .content {
            padding: 30px;
        }
    }

     @media(max-width:768px) {
       display: grid!important;
    }





`
export default Container