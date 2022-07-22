
import '../styles/style.css'
import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


export default function MyApp({ Component, pageProps  }) {
    return (
        <>
            <Head>
                <link rel="stylesheet" type="text/css" href="/nprogress.css" />
            </Head>

            <Component {...pageProps  } />
        </>
    )
}

