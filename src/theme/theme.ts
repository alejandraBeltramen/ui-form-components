import { createTheme } from "@mui/material";
import { pxToRem } from "../utils/utils";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#1C2827', // Yellow
      light: '#788885', // Lighter yellow shade
      dark: '#1C2827',  // Darker yellow shade
    },
    secondary: {
      main: '#F7EDE2', // Light Cream
      light: '#FBF5EF', // Lighter cream
      dark: '#D6C9B8',  // Darker cream
    },
    error: {
      main: '#F28482', // Coral
      light: '#F59A98', // Lighter coral
      dark: '#C46861',  // Darker coral
    },
    warning: {
      main: '#F6BD60', // Yellow (same as primary)
      light: '#F8D17B', // Lighter yellow
      dark: '#D69D4A',  // Darker yellow
    },
    info: {
      main: '#84A59D', // Teal Green
      light: '#A3C1B7', // Lighter teal
      dark: '#69857F',  // Darker teal
    },
    success: {
      main: '#F5CAC3', // Soft Pink
      light: '#F8D6D1', // Lighter pink
      dark: '#D2A8A2',  // Darker pink
    },
    grey: {
      50: '#F4F5F5',
      100: '#E0E5E4',
      200: '#C6CFCD',
      300: '#ACB8B5',
      400: '#92A09C',
      500: '#788885',
      600: '#616F6D',
      700: '#495755',
      800: '#333F3D',
      900: '#1C2827',
    },
  },
  typography: {
    subtitle1: {
      fontWeight: 400,
      fontSize: pxToRem("16px"),
      lineHeight: "175%",
      letterSpacing: pxToRem("0.15px"),
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: pxToRem("14px"),
      lineHeight: "157%",
      letterSpacing: pxToRem("0.1px"),
    },
    body1: {
      fontWeight: 400,
      fontSize: pxToRem("16px"),
      lineHeight: "150%",
      letterSpacing: pxToRem("0.15px"),
    },
    body2: {
      fontWeight: 400,
      fontSize: pxToRem("14px"),
      lineHeight: "143%",
      letterSpacing: pxToRem("0.17px"),
    },
    h1: {
      fontWeight: 300,
      fontSize: pxToRem("96px"),
      lineHeight: "116.7%",
      letterSpacing: pxToRem("-1.5px"),
    },
    h2: {
      fontWeight: 300,
      fontSize: pxToRem("60px"),
      lineHeight: "120%",
      letterSpacing: pxToRem("-0.15px"),
    },
    h3: {
      fontWeight: 400,
      fontSize: pxToRem("44px"),
      lineHeight: "116.7%",
      letterSpacing: 0,
    },
    h4: {
      fontWeight: 400,
      fontSize: pxToRem("32px"),
      lineHeight: "123.5%",
      letterSpacing: pxToRem("0.25px"),
    },
    h5: {
      fontWeight: 400,
      fontSize: pxToRem("22px"),
      lineHeight: "133.4%",
      letterSpacing: 0,
    },
    h6: {
      fontWeight: 500,
      fontSize: pxToRem("18px"),
      lineHeight: "160%",
      letterSpacing: pxToRem("0.15px"),
    },
    overline: {
      fontWeight: 400,
      fontSize: pxToRem("12px"),
      lineHeight: "266%",
      letterSpacing: pxToRem("1px"),
      textTransform: "uppercase",
    },
    button: {
      fontWeight: 500,
      fontSize: pxToRem("15px"),
      lineHeight: "150%",
      letterSpacing: pxToRem("0.15px"),
      textTransform: "capitalize",
    },
    caption: {
      fontWeight: 400,
      fontSize: pxToRem("12px"),
      lineHeight: pxToRem("19.92px"),
      letterSpacing: pxToRem("0.4px"),
    },
  }
})