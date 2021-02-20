import React, { useState } from "react";
import {
  Nav,
  NavMenu,
  Link,
  Logo,
  SideNav,
  NavBtn,
  SideNavBtn,
  MobileNav,
} from "./NavigationElements";

const Navigation = () => {
  const [openSideNav, setOpenSideNav] = useState(false);
  const [nav, setNav] = useState(false);

  const changeNavBar = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 35) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeNavBar);

  return (
    <>
      <Nav navColor={nav}>
        <Logo>Spectacles</Logo>
        <MobileNav>
          <NavMenu>
            <Link>Products</Link>
            <Link>Creaters</Link>
            <Link>learn</Link>
          </NavMenu>

          <NavBtn>Shop Now</NavBtn>
          <SideNavBtn onClick={() => setOpenSideNav(true)}>Menu</SideNavBtn>
        </MobileNav>
      </Nav>
      {openSideNav && (
        <SideNav>
          <SideNavBtn secondary onClick={() => setOpenSideNav(false)}>
            close
          </SideNavBtn>
          <Link>Products</Link>
          <Link>Creaters</Link>
          <Link>learn</Link>
        </SideNav>
      )}
    </>
  );
};

export default Navigation;
