import * as S from "./styles.ts";

const NavBar = () => {
  return (
    <S.Container>
      <S.Logo href="/">FASHIONISTA</S.Logo>
      <S.MenuArea>
        <S.NavLink to="/">Home</S.NavLink>
        <S.NavLink to="/Product">Product</S.NavLink>
        <S.NavLink to="/About">About</S.NavLink>
        <S.NavLink to="/Contact">Contact</S.NavLink>
      </S.MenuArea>
    </S.Container>
  );
};

export { NavBar };
