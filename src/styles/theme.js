import { css } from 'styled-components';
const sizes = {
  desktop: 992,
  tablet: 768,
  mobile: 576
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

const theme = {
  color: {
    primary: '#323648',
    secondary: '#00dced',
    cream: '#fffdf7',
    purple: '#7261a3',
    red: '#ff4365',
    black: '#333',
    lightGray: '#eee',
    text: '#666'
  },

  //spacing
  spacing: {
    xs: '.4rem',
    sm: '.8rem',
    reg: '1.6rem',
    med: '3.2rem',
    lg: '6.4rem'
  },

  //typography
  font: {
    headerFontStack: 'Lora, Montserrat, -apple-system, Roboto, Helvetica',
    bodyFontStack: 'Montserrat, -apple-system, helvetica, Roboto, sans-serif'
  },
  fontSize: {
    caption: '.8rem',
    body: '1.6rem',
    h5: '1.6rem',
    h4: '1.8rem',
    h3: '2rem',
    h2: '2.4rem',
    h1: '3.4rem',
    hero: '4.8rem'
  },

  //layout
  layout: {
    navPanelWidthDesktop: '13.2rem'
  },

  //motion
  motion: {
    baseTime: '250ms',
    baseCurve: 'ease-in-out'
  }
};

export default theme;
