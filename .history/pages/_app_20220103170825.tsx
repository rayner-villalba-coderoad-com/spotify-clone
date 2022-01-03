import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import '../styles/globals.css'

const  MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
