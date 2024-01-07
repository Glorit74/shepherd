import React from "react";
import styled from "styled-components";
import img from "../../images/background/home.jpg"
import { COLORS } from "../../constants";

function Background({ img, question, title, children }) {

  return (
    <Wrapper img={img}>
      <Shadow>
        {question && <PageTitle>{question}</PageTitle>}
        <PageMainTitle>{title}</PageMainTitle>
        {children}
      </Shadow>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1920px;
  max-height: 1080px;
  min-height: 100vh;
  background-color: darkgray;
  background: url(${img});
  background-size: cover;
  background-position: center bottom;
`;

const Shadow = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: ${COLORS.transparentGray15}; */
`;

const PageTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 180;
  line-height: 1.2;
  color: white;
  text-align: center;
  text-transform: uppercase;
  margin-top: 20px;
`;

const PageMainTitle = styled(PageTitle)`
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  margin-top: 0px;
  margin-bottom: 30px;
`;
export default Background;
