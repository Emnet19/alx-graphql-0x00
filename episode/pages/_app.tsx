import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { ApolloProvider } from '@apollo/client';
// import client from '../apollpClient';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// function MyApp({ Component, pageProps }) {
//   return (
//     <ApolloProvider client={client}>
//       <Component {...pageProps} />
//     </ApolloProvider>
//   );
// }

// export default MyApp;


// import React from 'react';
// import { ApolloProvider } from '@apollo/client';
// import client from '../apollClient';

// function MyApp({ Component, pageProps }) {
//   return (
//     <ApolloProvider client={client}>
//       <Component {...pageProps} />
//     </ApolloProvider>
//   );
// }

// export default MyApp;