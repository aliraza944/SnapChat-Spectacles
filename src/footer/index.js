import React from "react";
import { Logo, NavBtn } from "../header/NavigationElements";
import { Container, DivInside, Typo, P, H1 } from "../Cameras/CamerasStyles";
import { Ul, CopyRight, Side1, Side2, Li } from "./FooterStyles";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <Container>
        <DivInside footer>
          <Typo>
            <Logo footer>Specticals</Logo>
            <P footer>
              Stay up-to-date on the latest product launches, feature updates,
              and how-to content.
            </P>
            <NavBtn>Sign Up</NavBtn>
          </Typo>
        </DivInside>
        <DivInside>
          <Container footer>
            <Ul>
              <li>
                <H1 footer>Products</H1>
              </li>
              <li>
                <H1 footer>Creators</H1>
              </li>
              <li>
                <H1 footer>Learn</H1>
              </li>
            </Ul>
            <Ul>
              <li>
                <H1 footer>Support</H1>
              </li>

              <li>
                <P footer>Compatibility</P>
              </li>
              <li>
                <P footer>Returns</P>
              </li>
              <li>
                <P footer>Warranty</P>
              </li>
              <li>
                <P footer>Business Inquiries</P>
              </li>
              <li>
                <P footer>Feedback</P>
              </li>
            </Ul>
          </Container>
        </DivInside>
      </Container>
      <CopyRight>
        <Side1>
          <ul>
            <Li>©2021 Snap Inc</Li>
            <Li>Product Sales Terms</Li>
            <Li>Terms of Service</Li>
            <Li>Privacy Policy</Li>
            <Li>Download Snapchat</Li>
          </ul>
        </Side1>
        <Side2>
          <ul>
            <Li icons>
              <FiInstagram />
            </Li>
            <Li icons>
              <AiOutlineTwitter />
            </Li>
            <Li icons>
              <AiOutlineYoutube />
            </Li>
          </ul>
        </Side2>
      </CopyRight>
    </>
  );
};

export default Footer;
