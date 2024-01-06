import React from "react";
import styled from "styled-components";
import img from "./../../images/background_sheep.jpg"

function Background({ img, question, title, children }) {
  return (
    <Wrapper img={img}>
      {question && <PageTitle>{question}</PageTitle>}
      <PageMainTitle >{title}</PageMainTitle>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1920px;
  max-height: 1080px;
  min-height: 100vh;
  padding-top: 50px;
  background-color: darkgray;
  background: url(${img});
  background-size: cover;
  background-position: center bottom;
`;

const PageTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 180;
  line-height: 1.2;
  color: white;
  text-align: center;
  text-transform: uppercase;
`;

const PageMainTitle = styled(PageTitle)`
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  margin-bottom: 70px;
`;
export default Background;
