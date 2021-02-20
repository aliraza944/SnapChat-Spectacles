import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2em 0em 2em 2em;
  position: fixed;
  z-index: 3;

  background-color: ${(props) => {
    if (props.navColor === true) return "black";
  }};
  opacity: 0.8;
`;
export const NavMenu = styled.div`
  max-width: 40%;

  display: none;

  padding: 0 0em 0 0;
  margin-right: 1.5em;
  color: var(--clr-white);

  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
  }
`;
export const Logo = styled.h1`
  font-family: "Playball", cursive;
  font-size: ${(props) => (props.footer ? "2rem" : "var(--fs-primary)")};
  color: var(--clr-white);
`;

// my links for navigation
export const Link = styled.p`
  padding: 0 0 1.5em 0;
  text-align: center;
  border-top: 1px solid black;
  width: 100%;
  text-transform: capitalize;
  font-family: var(--ff-secondary);
  font-size: var(--fs-primary);

  @media (min-width: 720px) {
    padding: 0 0.5em 0 0;
    border: none;
  }
`;

export const NavBtn = styled.button`
  width: 100px;
  background-color: transparent;
  color: var(--clr-white);
  padding: var(--pd-button);
  border: 1px solid var(--clr-white);
  border-radius: var(--br-button);
  font-family: var(--ff-secondary);
  font-size: var(--fs-button);
`;

// side navigation for mobile

export const SideNav = styled.div`
  width: 100%;
  background-color: var(--clr-orange);
  padding: 2em 0 2em 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 4;
`;
export const SideNavBtn = styled.p`
  font-size: 1rem;
  padding-left: 0.5em;
  cursor: pointer;
  color: ${(props) => (props.secondary ? "black" : "var(--clr-white)")};
  font-family: var(--ff-secondary);
  display: block;
  @media (min-width: 720px) {
    display: none;
  }
`;
export const MobileNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
