import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import CoverFlowSwiper from './components/CoverFlowSwiper';
import Services from './components/Services';
import Featurettes from './components/Featurettes';
import DrTFooter from './components/DrTFooter';
import WhatALogoBanner from './components/WhatALogoBanner';

import 'bootstrap-icons/font/bootstrap-icons.scss';

const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <CoverFlowSwiper />
      <Services />
      <WhatALogoBanner />
      <Featurettes />
      <DrTFooter />
    </ErrorBoundary>
  );
};

export default App;

