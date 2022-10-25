import type { NextPage } from 'next'
import Head from 'next/head'
import Nav2 from '../components/Nav2'
import SideNav from '../components/SideNav'
import TopNav from '../components/TopNav'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Unoma</title>
        <meta name="description" content="Unoma homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex bg-black h-screen'>
        <div className='w-72'><SideNav page='home' /></div>
        <div className='flex-1 flex flex-col overflow-x-scroll scrollbar-none'>
          <TopNav />
          <Nav2 />
        </div>
      </main>
    </div>
  )
}
export default Home