import styled from 'styled-components';

//headings
export const H1 = styled.h1`
  color: ${props => (props.white ? 'white' : props.theme.color.primary)};
  font-size: ${props =>
    props.hero ? props.theme.fontSize.hero : props.theme.fontSize.h1};
  line-height: 1.4;
  font-family: ${props => props.theme.font.headerFontStack};
  font-weight: 700;
  margin-bottom: 1.6rem;
`;

export const H2 = H1.withComponent('h2').extend`
  font-size: ${props => props.theme.fontSize.h2};
`;

export const H3 = H1.withComponent('h3').extend`
  font-size: ${props => props.theme.fontSize.h3};
`;

export const H4 = H1.withComponent('h4').extend`
  font-size: ${props => props.theme.fontSize.h4};
`;

export const H5 = H1.withComponent('h5').extend`
  font-size: ${props => props.theme.fontSize.h5};
`;

//body paragraph
export const P = styled.p`
  color: ${props => (props.white ? 'white' : props.theme.color.text)};
  font-size: ${props => props.theme.fontSize.body};
  line-height: 2.4;
`;

//link
// export const StyledLink = P.withComponent(Link)`
//    color: ${props => (props.white ? 'white' : props.theme.color.secondary)};
//    text-decoration: none;

// `;
