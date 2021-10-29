/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../../styles/globals.css';
import PropTypes from 'prop-types';
import { ChakraProvider } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';
import wrapper from '../store';
import CustomTheme from '../../styles/theme';
import NavbarWithSubNavigation from '../common/components/Navbar/index-2';
import Footer from '../common/components/Footer';
import '@fontsource/lato/100.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';

function LearnApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={CustomTheme}>
      <NavbarWithSubNavigation />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

LearnApp.propTypes = {
  pageProps: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  Component: PropTypes.elementType.isRequired,
};
export default appWithTranslation(wrapper.withRedux(LearnApp));
