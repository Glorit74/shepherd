import React from "react";
import styled from "styled-components";
import img from "./../../images/background_sheep.jpg"

function Background({ img, question, title, children }) {
  return (
    <Wrapper img={img}>
      {question && <PageTitle>{question}</PageTitle>}
      <PageTitle style={{ fontSize: "2.8rem" }}>{title}</PageTitle>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1920px;
  max-height: 1080px;
  min-height: 100vh;
  padding: 25px;
  background-color: darkgray;
  background: url(${img});
  background-size: cover;
  background-position: center bottom;
  border: dotted green 2px;
`;

const PageTitle = styled.h1`
  font-size: 1.6rem;
  color: white;
  text-align: center;
  text-transform: uppercase;
`;
export default Background;
