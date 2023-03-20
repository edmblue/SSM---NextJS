import '@/styles/slider.css';
import '@/styles/globals.css';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import SplashScreen from '@/components/splashscreen';

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  Router.events.on('routeChangeStart', (url) => {
    setIsLoading(true);
  });
  Router.events.on('routeChangeComplete', (url) => {
    setIsLoading(false);
  });

  return <>{isLoading ? <SplashScreen /> : <Component {...pageProps} />}</>;
}
