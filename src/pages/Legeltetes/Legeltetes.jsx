import React, { useState, useRef } from "react";
import styled from "styled-components";
import Background from "../../components/Background";
import SheepIcon from "../../components/SheepIcon";
import UnstyledButton from "../../components/UnstyledButton";
import images from "../../utility";

import { COLORS } from "../../constants";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    setCurrentTime(video.currentTime);
    setDuration(video.duration);
  };

  const handleProgressClick = (e) => {
    const video = videoRef.current;
    const rect = e.target.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    video.currentTime = percent * duration;
  };

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
            <SheepIcon size={"45px"} />
            <Content>LEGELTETÉS</Content>
          </SubTitle>

          <CarouselWrapper>
            <PaginationButton onClick={goToFirst}>
              <MdKeyboardDoubleArrowLeft size={60} />
            </PaginationButton>
            <PaginationButton onClick={goToPrevious}>
              <MdKeyboardArrowLeft size={60} />
            </PaginationButton>
            {images[currentIndex].endsWith(".mp4") ? (
              <VideoWrapper>
                <video
                  ref={videoRef}
                  autoPlay={true}
                  loop
                  src={images[currentIndex]}
                  onTimeUpdate={handleTimeUpdate}
                />
                <ProgressBar
                  size={"large"}
                  value={currentTime}
                  max={duration}
                  onClick={handleProgressClick}
                />
              </VideoWrapper>
            ) : (
              <ImgWrapper>
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                />
              </ImgWrapper>
            )}
            <PaginationButton onClick={goToNext}>
              <MdOutlineKeyboardArrowRight size={60} />
            </PaginationButton>
            <PaginationButton onClick={goToLast}>
              <MdOutlineKeyboardDoubleArrowRight size={60} />
            </PaginationButton>
          </CarouselWrapper>
          <BackButton href="/" as="a">
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
  gap: 35px;
  align-items: center;
  color: ${COLORS.white};
  margin-bottom: 1rem;
`;

const Content = styled.h3`
  font-size: 3rem;
  letter-spacing: 0.05rem;
`;

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
`;

const ImgWrapper = styled.div`
  width: 60vw;
  height: 700px;
  border: solid;
  overflow: hidden;
  img {
    border: 5px solid ${COLORS.white};
    display: block;
    width: 100%;
    /* object-fit: cover; */
  }
`;
const VideoWrapper = styled(ImgWrapper)`
  video {
    width: 100%;
	margin-bottom: 25px;
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
