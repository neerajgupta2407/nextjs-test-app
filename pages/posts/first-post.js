import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';


export default function firstPost() {
  return (
    <Layout>
    <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    <h1>First Post</h1>
    <h2>
        <Link href="/">Back to home</Link>
        <img src="/image/scr.png" alt="Your Name" />

    </h2>
    </Layout>
  )
}
