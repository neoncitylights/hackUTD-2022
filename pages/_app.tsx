import type { AppProps } from 'next/app';
import { PageLayout } from '@/components/layout/PageLayout';
import { UserProvider } from '@auth0/nextjs-auth0';
import 'styles/reset.css';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (<UserProvider>
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  </UserProvider>);
}

export default MyApp;
