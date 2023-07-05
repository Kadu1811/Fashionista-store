import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled.a`
  color: #0a0a0a;
  font-weight: 900;
  font-size: 3rem;
  align-self: center;
  text-decoration: none;
  padding-left: 2em;

  font-family: 'Playfair Display', serif;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 540px) {
    font-size: 158%;
    margin-left: 4%;
  }
`;

export const Container = styled.div`
display: flex;
justify-content: space-between;

height: 100px;
background-color: #FFFFFF;
`;

export const MenuArea = styled.div`
display: flex;
align-items: center;

font-family: 'Rubik', sans-serif;;
font-weight: 600;

gap: 2em;
padding-right: 6em;
`;

export const NavLink = styled(Link)`
display: flex;
align-items: center;

color: #a6a4a4;
height: 100%;
text-decoration: none;

:hover{
    color: #0a0a0a;
transition-duration:  1s ;
}
`;
