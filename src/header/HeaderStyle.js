import styled from "styled-components";
import img1 from "../images/header.jpg";

export const MainHeader = styled.header`
  width: 100%;
  display: flex;
  margin: 0;
  position: relative;
  flex-direction: column;
  background-color: black;
  color: black;
  background-size: cover;
  padding: 0 0 70em 0;

  background: url(${img1}) no-repeat center;
  background-attachment: fixed;
  @media (min-width: 30px) {
    background: url(${img1}) no-repeat center;
    background-size: cover;
    background-attachment: fixed;
  }
`;

export const Intro = styled.div`
  max-width: 60%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 25em;
  left: 2.5em;
`;
export const Heading = styled.h1`
  font-family: var(--ff-secondary);
  font-size: 1.5rem;

  color: ${(props) => (props.camera ? "black" : "var(--clr-white)")};
  @media (min-width: 600px) {
    font-size: 2.5rem;
  }
`;
export const P = styled.p`
  max-width: 80%;
  font-family: var(--ff-secondary);
  font-size: var(--fs-para);
  color: var(--clr-white);
  margin: 2em 0 2em 0;
`;
