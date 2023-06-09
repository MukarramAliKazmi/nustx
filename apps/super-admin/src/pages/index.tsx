import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from 'ui'

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Super Admin</title>
    </Head>
    <main>
      <Layout sidebarItems={[{ title: 'Dashboard', route: '/' }]}>
        Dashboard
      </Layout>
    </main>
  </div>
)

export default Home
