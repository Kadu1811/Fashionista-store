import { Image } from 'antd'
import {
  ButtonArea,
  ButtonLearn,
  ButtonShop,
  Container,
  Description,
  ImageContainer,
  TextArea,
  Title,
} from './styles'

const Home = () => {
  return (
    <>
      <Container>
        {/* <div style={{ background: "blue" }}>Imagem</div> */}

        <TextArea>
          <Title>
            BOOST <br /> YOUR STYLE <br /> SENSE
          </Title>

          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            is simply dummy.
          </Description>

          <ButtonArea>
            <ButtonShop href="/">Shop Now</ButtonShop>

            <ButtonLearn href="/">Learn More</ButtonLearn>
          </ButtonArea>
        </TextArea>

        <ImageContainer>
          <Image
            style={{ borderRadius: '0 0 0 80px', paddingTop: '150px' }}
            width={950}
            preview={false}
            src="https://media.glamourmagazine.co.uk/photos/618d036c23e7c974d9039be4/16:9/w_2560%2Cc_limit/ZENDAYA_111121_GettyImages-1352575427_L.jpg"
          />
          {/* <img src={zendaya} alt="" width={200} height={400} /> */}
        </ImageContainer>
      </Container>
      <div>oi</div>
    </>
  )
}

export { Home }
