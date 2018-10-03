import styled from 'styled-components';

//headings
export const H1 = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => (props.hero ? '4.8rem' : '3.4rem')};
  font-family: ${props => props.theme.text.headerFontStack};
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 1.6rem;
`;

export const H2 = H1.withComponent('h2').extend`
  font-size: 2.4rem;
`;

export const H3 = H1.withComponent('h3').extend`
  font-size: 2rem;
`;

export const H4 = H1.withComponent('h4').extend`
  font-size: 1.8rem;
`;

export const H5 = H1.withComponent('h5').extend`
  font-size: 1.6rem;
`;

//body
export const Body = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1.6rem;
  font-family: ${props => props.theme.text.bodyFontStack};
  font-weight: 400;
  line-height: 2.8;
`;
