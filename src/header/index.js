import React from "react";
import Navigation from "./Navigation";
import { MainHeader, Heading, Intro, P } from "./HeaderStyle";

import { NavBtn } from "./NavigationElements";
const Header = () => {
  return (
    <MainHeader>
      <Navigation />

      <Intro>
        <Heading>
          Your world,
          <br /> the way you see it.
        </Heading>
        <P>
          Meet Spectacle: a camera inspired by the human eye,and powered by your
          imagintion.
        </P>
        <NavBtn>Learn More</NavBtn>
      </Intro>
    </MainHeader>
  );
};

export default Header;
