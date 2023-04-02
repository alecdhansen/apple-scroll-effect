import { MutableRefObject, useEffect, useRef, useState } from "react";
import {
  CanvasContainer,
  Container,
  ImageContainer,
  NewContainer,
  TestImage,
  Text,
  Title,
} from "./style";

const ScrollEffect = () => {
  const [scrolled, setScrolled] = useState<number>(0);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [airpodsHeight, setAirpodsHeight] = useState<number>(0);
  const frameCount = 146;
  const [scrollYPosition, setScrollYPosition] = useState<number>(0);
  const airpodsContainer = useRef() as MutableRefObject<HTMLDivElement>;
  const handleScroll = () => {
    setScrollYPosition(window.pageYOffset);
  };

  useEffect(() => {
    setAirpodsHeight(airpodsContainer.current?.offsetHeight);
    preloadImages();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollYPosition > 0 && scrollYPosition <= airpodsHeight) {
      setScrolled(Math.floor(scrollYPosition / (airpodsHeight / frameCount)));
    }
    if (
      Math.floor(scrollYPosition / (airpodsHeight / frameCount)) > frameCount
    ) {
      setScrolled(frameCount);
    }
    if (scrollYPosition === 0) {
      setScrolled(0);
    }
  }, [scrollYPosition]);

  const preloadImages = () => {
    for (let i = 1; i <= frameCount; i++) {
      const img: HTMLImageElement = new Image();
      img.src = `/AirPodImages/${i.toString().padStart(4, "0")}.jpg`;
      setImages((prevImages: HTMLImageElement[]) => [...prevImages, img]);
    }
  };

  const src =
    scrolled >= frameCount
      ? images[frameCount].src
      : images[0] && images[scrolled].src;

  return (
    <>
      <Container ref={airpodsContainer}>
        <CanvasContainer>
          <ImageContainer>
            <TestImage src={src} alt="" loading="eager" />
          </ImageContainer>
          <Text>Apple AirPods</Text>
        </CanvasContainer>
      </Container>
      <NewContainer>
        <Title>Buy Them Today!</Title>
      </NewContainer>
    </>
  );
};
export default ScrollEffect;
