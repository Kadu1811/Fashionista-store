import { Link, Route, useHref } from "react-router-dom";
import {
  ButtonArea,
  ButtonLearn,
  ButtonShop,
  Description,
  HomeContainer,
  ImageContainer,
  TextArea,
  TextContainer,
  Title,
} from "./styles";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <TextContainer>
          {/* <div style={{ background: "blue" }}>Imagem</div> */}

          <TextArea>
            <Title>
              BOOST <br /> YOUR STYLE <br /> SENSE
            </Title>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Description>

            <ButtonArea>
              <ButtonShop href="/">Shop Now</ButtonShop>
              <ButtonLearn href="/">Learn More</ButtonLearn>
            </ButtonArea>
          </TextArea>
        </TextContainer>

        <ImageContainer>oi</ImageContainer>
      </HomeContainer>
      <div>oi</div>
    </>
  );
};

export { Home };
