import React from "react";


import { GiSheep } from "react-icons/gi";
import { COLORS } from "../../constants";

import styled from "styled-components";

const MenuItem = ({ text }) => {
	
	const convertedText = text.replace(/[áéíóöőúüű]/gi, (match) =>
        ({
          á: "a",
          é: "e",
          í: "i",
          ó: "o",
          ö: "o",
          ő: "o",
          ú: "u",
          ü: "u",
          ű: "u",
        }[match]));
		const FirstWord = convertedText.split(',')[0];
   return (
     <Wrapper href={FirstWord}>
       <Content>
         <GiSheep
           style={{
             width: "60px",
             height: "60px",
             marginRight: "15px",
             padding: "3px",
             color: `${COLORS.white}`,
             border: `solid 2px ${COLORS.white}`,
             borderRadius: "50%",
           }}
         />
         {text}
       </Content>
     </Wrapper>
   );
};

const Wrapper = styled.a`

`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: solid hsl(0, 0%, 40%);
  background-color: transparent;
  width: 350px;
  padding: 15px 10px;
  font-size: 1.5rem;
  color: white;
`;


export default MenuItem;
