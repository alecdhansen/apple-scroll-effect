import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  height: 500vh;
  width: 100vw;
`;

export const CanvasContainer = styled.div`
  position: sticky;
  display: flex;
  justify-content: center;
  top: 25%;
  /* background-color: green; */
`;

export const ImageContainer = styled.div`
  width: 50%;
`;

export const TestImage = styled.img`
  width: 100%;
`;

export const Text = styled.h2`
  font-size: 5vw;
  margin: none;
  margin-left: 20px;
  padding-top: 65px;
`;

export const NewContainer = styled.div`
  background-color: #000;
  height: 125vh;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 5vw;
  margin-top: 500px;
  @media (max-width: 768px) {
    font-size: 10vw;
  }
`;
