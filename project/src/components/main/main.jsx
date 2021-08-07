import React, {Fragment, useState, useEffect, useCallback} from 'react';

import Footer from '../footer/footer';
import Header from '../header/header';

const TABLET_VIEWPORT_WIDTH = 768;
const isMobileViewport = () => window.innerWidth < TABLET_VIEWPORT_WIDTH;

function Main() {
  const [isMobile, setIsMobile] = useState(isMobileViewport());
  const changeDevice = useCallback(() => isMobileViewport() ? setIsMobile(true) : setIsMobile(false), []);

  useEffect(() => {
    window.removeEventListener('resize', changeDevice);
    window.addEventListener('resize', changeDevice);
  });

  return (
    <Fragment>
      <Header isMobile={isMobile} />
      <h1>Hello, world!</h1>
      <Footer isMobile={isMobile} />
    </Fragment>
  );
}

export default Main;
