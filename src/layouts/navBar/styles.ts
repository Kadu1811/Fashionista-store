import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerPai = styled.div`
display: flex;
justify-content: space-between;

height: 100px;
background-color: #FFFFFF;
`;

export const Container = styled.div`
display: flex;
align-items: center;
font-weight: 500;

gap: 2em;
margin-right: 5em;
`;

export const Logo = styled.a`
  color: #0a0a0a;
  font-weight: 700;
  font-size: 2rem;
  align-self: center;
  text-decoration: none;
  margin-left: 1em;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 540px) {
    font-size: 158%;
    margin-left: 4%;
  }
`;

export const NavLink = styled(Link)`
color: grey;
/* font-weight: 500px; */
text-decoration: none;

:hover{
    color: #0a0a0a;
}
`;
