import styled from "styled-components";
import imgMobile from "../images/creators_mobile.png";
import imgbg from "../images/creators.png";
export const DivInside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  padding: 4em 0 4em 0;
  @media (min-width: 426px) {
    width: 50%;
    /* overflow-x: hidden; */
    align-items: ${(props) => (props.footer ? "flex-start" : "center")};
    justify-content: center;
    padding: ${(props) => (props.footer ? "0 0 0 0 " : "8em 0 0em 0")};
    margin: ${(props) => props.footer && "-10em 0 0 0"};
  }
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 0;
  flex-direction: column;
  background-color: black;
  color: white;
  padding-bottom: 4em;
  @media (min-width: 426px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const H1 = styled.h1`
  color: white;
  width: 100%;
  text-align: center;
  font-family: var(--ff-secondary);
  font-size: ${(props) => (props.footer ? "1.5rem" : "3rem")};
  line-height: 1.15;
  margin: 0 0 0.5em 0;
  @media (min-width: 426px) {
    font-size: 1.5rem;
    text-align: initial;
  }
`;
export const Typo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 18em 0 0em 2.5em;
  width: 100%;

  /* height: 200px; */
  /* align-items: center; */
  justify-content: flex-end;
  @media (min-width: 426px) {
    align-items: flex-start;
    margin: 2em 0 0em 2.5em;
  }
`;
export const P = styled.p`
  font-family: var(--ff-secondary);
  font-size: ${(props) => (props.footer ? "1rem" : "1.5rem")};
  margin: 1em 0 1em 0;
  display: ${(props) => (props.footer ? "block" : "none")};
  @media (min-width: 550px) {
    display: block;
  }
`;
export const People = styled.div`
  width: 100%;
  display: flex;
  margin: 0;
  background-color: black;
  color: black;
  position: relative;
  padding: 2em 0 50em 0;
  background: url(${imgMobile}) no-repeat center;
  background-size: 100%;

  @media (min-width: 426px) {
    flex-direction: row;
    flex-wrap: wrap;
    background: url(${imgbg}) no-repeat 95% 0%;
    background-size: cover;
    background-attachment: fixed;
  }
`;
