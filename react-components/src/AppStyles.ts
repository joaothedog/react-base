import styled from "styled-components";

interface ButtonProps {
  small?: boolean,
  bgColor: string,  
}
export const Button = styled.button<ButtonProps>`
  font-size: ${(props) => (props.small ? '10px' : '30px')};
  background-color: ${(props) => (props.bgColor)};
`;

interface ContainerProps {
  bgColor: string;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${props => props.bgColor};
  color: white;
  max-width: 600px;
  margin: auto;

  @media (max-width: 500px) {
    background-color: green;
  }
`;