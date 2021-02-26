import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';


const theme = extendTheme({
  components: {
      Button: {
        baseStyle: {
          borderRadius: '0rem', 
          _focus: {
            boxShadow: ""
          },
          _disabled: {
            opacity: 1.0,
          },
          
        },
        variants: {
          outline: {
            border: "1px solid",
            borderColor: "black",
            _hover:{
            bg: '#EDF2F7',
          },
          },
          solid: {
            bg: "black",
            _hover:{
            bg: '#2D3748',
          },
          color: 'white'
          },
          
        },
        // The default size and variant values
        defaultProps: {
          size: "md",
          variant: "solid",
        },
      },
      Menu: {
        baseStyle: {
          list:{
            borderRadius: '0rem',
            minW: "3xl",
            py: "0", 
            _focus: {
              boxShadow: ""
            },
          },
          
          
        },
      },
      Modal: {
        baseStyleDialogContainer: {
          zIndex: 2,
        },
        modalCloseButton: {
          _focus: {boxShadow: ""},
        }

      },
      Input: {
        baseStyle: {
          outline: '1px',
          border: "1px solid",
          borderColor: '#2D3748',
          borderRadius: '0rem',
        },
        variants: {
          outline: {
            field: {
              border: "1px solid",
              borderColor: "gray.400",
              borderRadius: '0rem',
              _hover: {
              borderColor: "gray.700",
              },
            },
          },
        },
      },
      Tabs: {
        variants: {
          outline: {
            tab : {
              _focus: { boxShadow: ""},
              _selected: {border: '1px'},
            },
          },
        },
      },
      Link: {
        baseStyle: {
          color: "white",
          _hover: {
            textDecoration: "none",
          },
          _focus: {
            boxShadow: "none",
          }
        }
      }
    },
  styles: {
    global: {
      "html, body": {
        fontFamily: "Montserrat",
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
});


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


