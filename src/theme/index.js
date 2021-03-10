import { extendTheme, ThemeOverride } from "@chakra-ui/react"
import components from "./components"

const customTheme = {
  styles: {
    global: {
      "html, body, heading": {
        fontFamily: "Montserrat",
        overflowX: "hidden",
        fontSize: "sm",
        color: "gray.900",
        lineHeight: "tall",
      },
      a: {
        color: "gray.900",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },

  fonts: {
    body: "'Montserrat', sans-serif",
    heading: "'Montserrat', sans-serif",
  },

  colors: {},
  sizes: {
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  shadows: {},
  components: components,
}

export const theme = extendTheme(customTheme)
