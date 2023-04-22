import '../styles/globals.css';
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import 'prismjs/themes/prism-tomorrow.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-reddie" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
