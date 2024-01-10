import React, { useState } from "react";
import Background from "../../components/Background";
import BackButton from "../../components/BackButton";
import UnstyledButton from "../../components/UnstyledButton";
import styled from "styled-components";
import puliAvatar from "./puliAvatar.jpg";
import { puli } from "../../utility";
import { COLORS, puliText } from "../../constants";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Puli() {
  const [selectedImage, setSelectedImage] = useState(0);
  //   const [selected, setSelected] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (image) => {
    setSelectedImage(image);
    // setSelected(true);
    setCurrentIndex(image);
  };

  const goToPrevious = () => {
    console.log(currentIndex, "next után");
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : puli.length - 1
    );
  };
  const goToNext = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex < puli.length - 1 ? prevIndex + 1 : 0
    );

  return (
    <Background question="" title="">
      <Shadow>
        <SubTitle>TÖBB MINT</SubTitle>
        <Title>PULI</Title>
        <Wrapper>
          <PuliAvatar>
            <img src={puliAvatar} alt="puli" />
          </PuliAvatar>
          {puli.map((filename, index) => (
            <ImageWrapper key={index}>
              <img
                src={puli[index]}
                alt={`Puli ${index}`}
                onClick={() => handleClick(index)}
                style={{
                  fontSize: "23px",
                  color: "white",
                  textAlign: "center",
                  border: `${index === currentIndex ? "solid yellow" : "none"}`,
                }}
              />
            </ImageWrapper>
          ))}
        </Wrapper>
        {/* {selected && ( */}
        <>
          <CarouselWrapper>
            <PaginationButton onClick={goToPrevious}>
              <MdKeyboardArrowLeft size={80} />
            </PaginationButton>
            <SelectedImageWrapper>
              <img src={puli[currentIndex]} alt={`Puli ${currentIndex}`} />
            </SelectedImageWrapper>
            <PaginationButton onClick={goToNext}>
              <MdOutlineKeyboardArrowRight size={80} />
            </PaginationButton>
          </CarouselWrapper>
          {puliText[currentIndex]?.name  && <StoryContainer>
            <StoryTitle>{puliText[currentIndex].name}</StoryTitle>
            <Story>{puliText[currentIndex].story}</Story>
          </StoryContainer>}
        </>
        {/* )} */}
        <BackButton />
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
  position: fixed;
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
  overflow-y: auto;
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
const CarouselWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectedImageWrapper = styled.div`
  width: 40vw;
  margin-top: 55px;
  img {
    object-fit: cover;
    object-position: top center;
    aspect-ratio: 1.1 / 1;
    display: block;
    width: 100%;
  }
`;

const PaginationButton = styled(UnstyledButton)`
  color: ${COLORS.white};
  padding: 5px 10px;
`;

const StoryContainer = styled.article`
  width: 70vw;
  margin: auto;
  margin-top: 25px ;
  padding: 0.8rem 1rem;
  color: ${COLORS.white};
  border: 1px solid ${COLORS.white};
`;

const StoryTitle = styled.h4`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  margin: auto;
`;

const Story = styled.p`
  columns: 2;
`;
export default Puli;
