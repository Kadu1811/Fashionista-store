import * as S from "./styles.ts";

const Menu = () => {
  return (
    <S.ContainerPai>
      <S.Logo href="/">Fashionista</S.Logo>
      <S.Container>
        <S.NavLink to="/">Home</S.NavLink>
        <S.NavLink to="/Product">Product</S.NavLink>
        <S.NavLink to="/About">About</S.NavLink>
        <S.NavLink to="/Contact">Contact</S.NavLink>
        {/* <NavLink to="/NotFound">Not found</NavLink> */}
      </S.Container>
    </S.ContainerPai>
  );
};

export { Menu };
