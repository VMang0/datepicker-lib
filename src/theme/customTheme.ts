import { DefaultTheme } from 'styled-components';

export const customTheme: DefaultTheme = {
  colors: {
    blue: {
      DEFAULT: '#2F80ED',
      100: '#2F80ED1A',
      200: '#2F80ED99',
      300: '#292D32',
    },
    gray: {
      DEFAULT: '#fcfcfc',
      100: '#f1f1f1',
      200: '#E1E1E1',
      300: '#DDDDDD',
      400: '#BBBBBB',
      500: '#AAAAAA',
      600: '#888888',
      700: '#333333',
    },
    white: {
      DEFAULT: '#fff',
    },
    black: {
      DEFAULT: '#000000',
    },
    yellow: {
      DEFAULT: '#FFF9C4',
    },
    green: {
      DEFAULT: '#C8E6C9',
    },
    red: {
      DEFAULT: '#FFCDD2',
      100: '#ff0000',
    },
  },
  gap: {
    s: '1px',
    m: '5px',
    l: '10px',
  },
  fontSize: {
    s: '13px',
    m: '14px',
    l: '15px',
  },
  fontWeight: {
    400: 400,
    600: 600,
    700: 700,
  },
  sizes: {
    full: '100%',
    xxs: '10px',
    xs: '16px',
    s: '17px',
    m: '20px',
    l: '150px',
    xl: '250px',
  },
  fonts: {
    main: 'Open Sans, sans-serif',
    secondary: 'Poppins, sans-serif',
  },
  borderRadius: {
    s: '5px',
    m: '8px',
    l: '50px',
  },
  spaces: {
    xs: '8px',
    s: '10px',
    m: '15px',
    l: '45px',
    xl: '250px',
  },
};
