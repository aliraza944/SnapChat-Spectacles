import React from "react";
import { Heading, Intro } from "../header/HeaderStyle";
import { NavBtn } from "../header/NavigationElements";
import video from "../Video/Homepage.mp4";
import { Typo, People, DivInside, Container, P } from "./CamerasStyles";
const Cameras = () => {
  return (
    <div>
      <Container>
        <DivInside>
          <Typo>
            <Heading>
              Two Cameras.
              <br />
              Three Dimensions.
            </Heading>
            <P>
              Specticals 3 captures your world in 3D <br /> They are a step
              closer to a camera that can <br /> interact with the world around
              you.
            </P>
            <NavBtn>Learn More</NavBtn>
          </Typo>
        </DivInside>
        <DivInside>
          <video autoPlay loop style={{ width: "100%", maxWidth: "426px" }}>
            <source src={video} type="video/mp4" />
          </video>
        </DivInside>
      </Container>
      <People>
        <DivInside>
          <Intro>
            <Typo>
              <Heading camera>
                Your World,
                <br />
                Reimagined
                <br />
                with Specticals.
              </Heading>
              <P>
                Meet Lauren, Viktoria, and Reed + Rader. Three <br /> creators
                reimagining their worlds through short <br /> films with
                Spectacles.
              </P>
              <NavBtn style={{ color: "black", border: "1px solid black" }}>
                Learn More
              </NavBtn>
            </Typo>
          </Intro>
        </DivInside>
      </People>
    </div>
  );
};

export default Cameras;
