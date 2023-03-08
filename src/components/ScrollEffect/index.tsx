import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState<number>(1);
  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const windowHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollLength =
      Math.ceil(((scrollpx / windowHeightPx) * 100) / 0.69) + 1;
    setScrolled(scrollLength);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
    return () => window.removeEventListener("scroll", scrollProgress);
  }, []);
  return (
    <>
      <Container>
        <CanvasContainer>
          <ImageContainer>
            <TestImage
              src={`AirPodImages/${scrolled.toString().padStart(4, "0")}.jpg`}
            />
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
