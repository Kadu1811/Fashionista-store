import { Button, Typography } from "antd";
import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    height: 100vh;

    background-color: #EEDDCC;
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */

    width: 50%;
`;

export const TextArea = styled.div`
    padding-left: 5em;
`;

export const Title = styled(Typography)`
    font-weight: 700;
    font-size: 50px;
    line-height: 1.1;
    padding-bottom: 20px;
    
`;

export const Description = styled(Typography.Paragraph)`
    padding-bottom: 4em;
    
    max-width: 450px;
`;

export const ButtonArea = styled.div`
    display: flex;
    gap: 20px;
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    
    width: 50%;
`;

export const ButtonShop = styled(Button)`
`;

export const ButtonLearn = styled(Button)`
    /* margin-left: 20px; */
`;
