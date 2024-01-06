import React, { useState } from "react";
import styled from "styled-components";
import Background from "../../components/Background";
import SheepIcon from "../../components/SheepIcon";
import UnstyledButton from "../../components/UnstyledButton";

import { COLORS } from "../../constants";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //   const imageContext = require.context(
  //     "public/pictures",
  //     false,
  //     /\.(png|jpe?g|svg)$/
  //   );
  //   const images = imageContext.keys().map(imageContext);

  const images = [
    "pictures/nyaj1.jpg",
    "pictures/nyaj2.jpg",
    "pictures/nyaj3.jpg",
    "pictures/nyaj4.jpg",
    "pictures/nyaj5.jpg",
  ];

  const goToFirst = () => setCurrentIndex(0);
  const goToPrevious = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  const goToNext = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  const goToLast = () => setCurrentIndex(images.length - 1);

  return (
    <>
      <Background question="Mi mindent csinál" title="a pásztor">
        <Wrapper>
          <SubTitle>
            <SheepIcon size={"30px"} />
            Legeltetés
          </SubTitle>

          <CarouselWrapper>
            <PaginationButton onClick={goToPrevious}>
              <MdKeyboardDoubleArrowLeft size={42} />
            </PaginationButton>
            <PaginationButton onClick={goToFirst}>
              <MdKeyboardArrowLeft size={42} />
            </PaginationButton>

            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

            <PaginationButton onClick={goToNext}>
              <MdOutlineKeyboardArrowRight size={42} />
            </PaginationButton>
            <PaginationButton onClick={goToLast}>
              <MdOutlineKeyboardDoubleArrowRight size={42} />
            </PaginationButton>
          </CarouselWrapper>
          <BackButton href="/" as='a'>
            Vissza
          </BackButton>
        </Wrapper>
      </Background>
    </>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled.h2`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  color: ${COLORS.white};
  margin-bottom: 1rem;
`;

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;


  img {
    border: 5px solid ${COLORS.white};
    display: block;
    width: 100%;
    margin: 0;
  }
`;

const PaginationButton = styled(UnstyledButton)`
  color: ${COLORS.white};
  padding: 5px 10px;
`;

const BackButton = styled(UnstyledButton)`
  color: ${COLORS.white};
  padding: 3px 15px;
  margin-top: 25px;
  border: 1px solid ${COLORS.white};
  border-radius: 4px;
  background-color: ${COLORS.buttonBg};
    &:hover {
      background-color: ${COLORS.buttonBgHover};
    }
  
`;
export default Carousel;
