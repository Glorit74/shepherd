import React from "react";
import styled from "styled-components";

import SheepIcon from "../SheepIcon";
import { COLORS } from "../../constants";

const MenuItem = ({ text }) => {
  const convertedText = text.replace(
    /[áéíóöőúüű]/gi,
    (match) =>
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
      }[match])
  );
  const FirstWord = convertedText.split(",")[0];

  return (
    <Wrapper href={FirstWord}>
      <Content>
        <SheepIcon size={"36px"} />
        {text}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  margin: auto;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  /* border: 3px solid ${COLORS.white}; */
  border-radius: 8px;
  background-color: ${COLORS.buttonBg};
  width: 350px;
  padding: 0.5em 1em;
  font-size: 1.5rem;
  color: white;
  &:hover {
    background-color: ${COLORS.buttonBgHover};
  }
`;

export default MenuItem;
