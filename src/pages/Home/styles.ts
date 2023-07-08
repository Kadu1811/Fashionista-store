import { Button, Typography } from 'antd'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  background-color: #eeddcc;
`

export const TextArea = styled.div`
  padding-left: 5em;
`

export const Title = styled(Typography)`
  font-family: 'Playfair Display', serif;
  letter-spacing: 6px;
  font-weight: 800;
  font-size: 60px;
  line-height: 1.1;
  padding-bottom: 20px;
  color: #32251f;
`

export const Description = styled(Typography.Paragraph)`
  padding-bottom: 4em;
  max-width: 450px;
`

export const ButtonArea = styled.div`
  display: flex;
  gap: 20px;
`

export const ButtonShop = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  background-color: #32251f;
  border: #32251f;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);

  height: 50px;
  width: 120px;
  border-radius: 10px;
  text-decoration: none;

  :hover {
    color: #fff;
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  }
`

export const ButtonLearn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #32251f;
  font-weight: 600;
  background-color: transparent;
  border: 1px solid #32251f;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);

  height: 50px;
  width: 120px;
  border-radius: 10px;
  text-decoration: none;

  :hover {
    color: #fff;
    border: 1px solid #32251f;
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  }
`

export const ImageContainer = styled.div`
  display: flex;
  margin-left: 6em;

  @media (max-width: 1600px) {
    width: 50%;
  }
`
