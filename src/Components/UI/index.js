import styled from "styled-components";

export const Icone = styled.img`
  height: 25px;
  width: 25px;

  
  ${props => props.marginTop ? `margin-top:${props.marginTop}` : ''}
`;

