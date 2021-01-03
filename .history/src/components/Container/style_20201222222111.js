
import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`

// background: gainsboro;
display: flex;
justify-content: center;  

  margin-right: 20%;

    .item {     
	/* O flex: 1; é necessário para que cada item se expanda ocupando o tamanho máximo do container. */
	 flex: 0.3; 
	margin: 15px;
	// background: tomato;
	text-align: center;
    font-size: 1.5em;

    span {
       margin:5px;
       color :black;
    }
    .content {
        padding: 30px;
        margin:5px;

    }

}





`
export default Container