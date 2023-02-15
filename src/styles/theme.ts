import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    neutral: {
      150: '#FCF9F9',
      400: '#BFBBBB',
      450: '#8E8B8B',
      600: '#464343',
      900: '#232323',
      950: '#191818',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'neutral.600',
        color: 'neutral.150',
      },
    },
  },
})
