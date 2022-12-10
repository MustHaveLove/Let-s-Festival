import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Script from 'next/script';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <Script
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=35d0ebb8043b1e6472daa334b0721af2&libraries=services,clusterer&autoload=false"
          strategy="beforeInteractive"
        />
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </>
  );
}

function Auth({ children }) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=login required');
    },
  });
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return children;
}

export default MyApp;
