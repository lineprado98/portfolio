import styled from "styled-components"

const Header = styled.div`
 position:fixed;
 width: 100%;
 height:9%;
 background:#111111;

 .opac {
    opacity : 1;
 }
 .social {
   visibility:show;
}
 @media only screen and (max-width:792px) {
   .social {
      visibility: show hidden;
   }
}


`

export default Header