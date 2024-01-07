import React from "react";
import Background from "../../components/Background";
import styled from "styled-components";
import { puli } from "../../utility";
import { COLORS } from "../../constants";

function Puli() {
  return (
    <Background question="" title="">
      <Shadow>
        <SubTitle>TÖBB MINT</SubTitle>
        <Title>PULI</Title>
        <Wrapper>
          <PuliAvatar>
            <img src={puli[0]} alt="puli" />
          </PuliAvatar>
          {puli.map((filename, index) => (
            <ImageWrapper key={index + 1}>
              <img src={puli[index]} alt={`Puli ${index + 1}`} />
            </ImageWrapper>
          ))}
        </Wrapper>
      </Shadow>
    </Background>
  );
}

const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  top: 30px;
  margin: auto;
  gap: 10px;
  max-width: 80vw;
  max-height: 400px;
  background: black;

  overflow-y: auto;
`;

const Title = styled.h2`
  color: ${COLORS.white};
  font-size: 2rem;
  font-weight: 900;
  margin-left: 40px;
  letter-spacing: 8px;
`;
const SubTitle = styled.h3`
  color: ${COLORS.white};
  font-size: 2rem;
  margin-top: 55px;
  margin-left: 40px;
  font-weight: 100;
  line-height: 0.8;
`;

const Shadow = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: radial-gradient(
    circle at top left,
    hsla(0, 0%, 85%, 0.15) 0%,
    hsla(0, 0%, 0%, 0.85) 50%,
    hsl(0, 0%, 3.5%) 90%
  );
`;

const PuliAvatar = styled.main`
  position: fixed;
  top: 0;
  right: 0px;
  width: 150px;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  border-radius: 0 0 0 15px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const ImageWrapper = styled.picture`
  width: 110px;
  img {
    object-fit: cover;
    aspect-ratio: 1 / 1;
    border: 1px solid ${COLORS.white};
    display: block;
    width: 100%;
  }
`;

export default Puli;
