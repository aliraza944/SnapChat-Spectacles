import styled from "styled-components";
export const Ul = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  list-style: none;
  flex-direction: column;
`;
export const Li = styled.li`
  display: ${(props) => (props.icons ? " inline-block" : "block")};
  padding: 1.5em;
  cursor: pointer;
  font-size: ${(props) => (props.icons ? "1rem" : "1rem")};
  @media (min-width: 426px) {
    display: inline-block;
  }
`;

export const CopyRight = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: 426px) {
    flex-direction: row;
  }
`;
export const Side1 = styled.div`
  width: 100%;
  background-color: whitesmoke;

  @media (min-width: 426px) {
    width: 75%;
  }
`;
export const Side2 = styled.div`
  width: 100%;
  background-color: var(--clr-orange);
  @media (min-width: 426px) {
    width: 25%;
  }
`;
