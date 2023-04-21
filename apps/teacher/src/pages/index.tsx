import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => (
  <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <Head>
      <title>Teacher</title>
    </Head>
    <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
      <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
        Teacher
      </h1>
    </main>
  </div>
)

export default Home
