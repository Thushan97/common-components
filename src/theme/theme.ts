import { createTheme, Shadows } from '@mui/material';
import React from 'react';

declare module '@mui/material/styles' {
  interface Palette {
    black: Palette['primary'];
    white: Palette['primary'];
    shades: {
      placeholderText: string;
      blueBorder: string;
      errorBorder: string;
      blackBorder: string;
      shadow: string;
      lightError: string;
      disabled: string;
      whiteBorder1: string;
      whiteBorder2: string;
    };
  }
  interface PaletteOptions {
    black?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
    shades?: {
      placeholderText?: string;
      blueBorder?: string;
      errorBorder?: string;
      blackBorder?: string;
      shadow?: string;
      lightError?: string;
      disabled?: string;
      whiteBorder1?: string;
      whiteBorder2?: string;
    };
  }

  interface TypographyVariants {
    bodyRegular: React.CSSProperties;
    bodyBold: React.CSSProperties;
    meta: React.CSSProperties;
    h4Bold: React.CSSProperties;
    subheadRegular: React.CSSProperties;
    subheadBold: React.CSSProperties;
    footnoteBold: React.CSSProperties;
    title3Bold: React.CSSProperties;
    footnoteRegular: React.CSSProperties;
    title2Bold: React.CSSProperties;
    title2Regular: React.CSSProperties;
    headlineBold: React.CSSProperties;
    calloutBold: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    bodyRegular?: React.CSSProperties;
    bodyBold?: React.CSSProperties;
    meta?: React.CSSProperties;
    h4Bold?: React.CSSProperties;
    subheadRegular?: React.CSSProperties;
    subheadBold?: React.CSSProperties;
    footnoteBold?: React.CSSProperties;
    title3Bold?: React.CSSProperties;
    footnoteRegular?: React.CSSProperties;
    title2Bold?: React.CSSProperties;
    title2Regular?: React.CSSProperties;
    headlineBold?: React.CSSProperties;
    calloutBold?: React.CSSProperties;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    black: true;
    white: true;
    shades: true;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    bodyRegular: true;
    bodyBold: true;
    meta: true;
    h4Bold: true;
    subtitle1: true;
    subtitle2: true;
    body1: false;
    body2: false;
    caption: true;
    overline: false;
    subheadRegular: true;
    subheadBold: true;
    footnoteBold: true;
    title3Bold: true;
    footnoteRegular: true;
    title2Bold: true;
    title2Regular: true;
    headlineBold: true;
    calloutBold: true;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            backgroundClip: 'text',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      dark: '#0E1831',
      main: '#243C7B',
    },
    secondary: {
      main: '#038CEF',
      light: '#E6F4FD',
    },
    error: {
      main: '#B22A2A',
    },
    warning: {
      main: '#DECF44',
    },
    info: {
      main: '#000',
    },
    success: {
      main: '#197223',
    },
    black: {
      main: '#000000',
      light: '#949494',
      contrastText: '#686868',
    },
    white: {
      main: '#FFFFFF',
    },
    action: {
      hover: '#E6F4FD',
      disabledBackground: '#9FADCF',
    },
    text: {
      primary: '#303133',
      secondary: '#6B6B6B',
    },
    shades: {
      placeholderText: '#979797',
      blueBorder: '#35A3F2',
      errorBorder: '#E0AAAA',
      blackBorder: '#000',
      shadow: 'rgba(0, 0, 0, 0.05)',
      lightError: '#FAF4F4',
      disabled: '#7c7b7b1f',
      whiteBorder1: '#EAEAEA',
      whiteBorder2: '#E1E1E1',
    },
  },
  typography: {
    fontFamily: 'Satoshi',
    h1: {
      fontFamily: 'Satoshi',
      fontWeight: 500,
      fontSize: '64px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    h2: {
      fontFamily: 'Satoshi',
      fontWeight: 500,
      fontSize: '48px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    h3: {
      fontFamily: 'Satoshi',
      fontWeight: 500,
      fontSize: '40px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    h4Bold: {
      fontFamily: 'Satoshi',
      fontWeight: 700,
      fontSize: '36px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    h4: {
      fontFamily: 'Satoshi',
      fontWeight: 500,
      fontSize: '36px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    h5: {
      fontFamily: 'Satoshi',
      fontWeight: 500,
      fontSize: '24px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    title2Bold: {
      fontFamily: 'Satoshi',
      fontWeight: 700,
      fontSize: '22px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    title2Regular: {
      fontFamily: 'Satoshi',
      fontWeight: 400,
      fontSize: '22px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    h6: {
      fontFamily: 'Satoshi',
      fontWeight: 400,
      fontSize: '20px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    title3Bold: {
      fontFamily: 'Satoshi',
      fontWeight: 700,
      fontSize: '20px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    bodyBold: {
      fontFamily: 'Satoshi',
      fontWeight: 700,
      fontSize: '17px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    bodyRegular: {
      fontFamily: 'Satoshi',
      fontWeight: 400,
      fontSize: '17px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    calloutBold: {
      fontFamily: 'Satoshi',
      fontWeight: 500,
      fontSize: '16px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    subheadBold: {
      fontFamily: 'Satoshi',
      fontWeight: 700,
      fontSize: '15px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    subheadRegular: {
      fontFamily: 'Satoshi',
      fontWeight: 400,
      fontSize: '15px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    meta: {
      fontFamily: 'Satoshi',
      fontWeight: 400,
      fontSize: '14px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    button: {
      fontFamily: 'Satoshi',
      fontWeight: 700,
      fontSize: '14px',
      letterSpacing: 0,
      lineHeight: 'normal',
      textTransform: 'none',
    },
    footnoteBold: {
      fontFamily: 'Satoshi',
      fontWeight: 700,
      fontSize: '13px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    footnoteRegular: {
      fontFamily: 'Satoshi',
      fontWeight: 400,
      fontSize: '13px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    subtitle1: {
      fontFamily: 'Satoshi',
      fontWeight: 700,
      fontSize: '12px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    caption: {
      fontFamily: 'Satoshi',
      fontWeight: 400,
      fontSize: '12px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    subtitle2: {
      fontFamily: 'Satoshi',
      fontWeight: 400,
      fontSize: '10px',
      letterSpacing: 0,
      lineHeight: 'normal',
    },
    body1: undefined,
    body2: undefined,
    overline: undefined,
  },
  shadows: [
    ...createTheme({}).shadows.map((shadow, i) => (i === 1 ? '0px 4px 32px 0px #00000012' : shadow)),
  ] as Shadows,
});
