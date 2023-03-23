import { Navbar } from '@/components/Navbar';
import { initFirebase } from '@/firebase/config';
import Head from 'next/head';
import React from 'react';

const Page = ({ children }: any) => {
  initFirebase();

  return (
    <>
      <Head>
        <title>DoTask</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar links={[{ label: 'Donate ❤', link: '/' }]} />
      <main>{children}</main>
    </>
  );
};

export default Page;