import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/Header'

export default function Document() {
   return (
      <Html lang="en">
         <Head title='Country-App'>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <body className='bg-very-dark-blue-dark-mode'>
            <Header />
            <Main />
            <NextScript />
         </body>
      </Html>
   )
}