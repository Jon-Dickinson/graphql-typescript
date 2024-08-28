import { AppProps as NextAppProps } from 'next/app';
import { ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { useApollo } from '../lib/apollo';
import './global.css';

interface AppProps extends NextAppProps {
  pageProps: {
    initialApolloState?: NormalizedCacheObject;
  };
}

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
