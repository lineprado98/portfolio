import styled from "styled-components"

const Menu = styled.div`

font-size:25px;
 .sociais{
    display: flex;
    margin-right: auto;
 }
 li{
     color:#acb5b5;
     padding:5px 0px 5px 60px;
 }
 li:hover{
    color:white;
    opacity:1!important;
 }
 ul{
     justify-content: flex-end;
     padding-right: 13%;
     margin:5px 0px 0px 0px;
     list-style: none; // remove a marcação de lista
     display:flex;
 }

 @media(max-width:768px){
    li {
        padding:10px;
    } 
    ul {
        justify-content:center;
        padding-right: 10%;
    }
 }


`

export default Menu