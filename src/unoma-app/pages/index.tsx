import type { NextPage } from 'next'
import Head from 'next/head'
import Nav2 from '../components/Nav2'
import SideNav from '../components/SideNav'
import TopNav from '../components/TopNav'
import VericalCard from '../components/VericalCard'

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
        <div className='flex-1 flex flex-col overflow-x-scroll  overflow-y-scroll scrollbar-none'>
          <TopNav />
          <Nav2 />
          <div className='px-5 grid grid-cols-4 space-y-4 border-b-2 border-b-purple py-5'>
            <VericalCard thumbnail="/card1.png" />
            <VericalCard thumbnail="/card2.png" />
            <VericalCard thumbnail="/card3.png" />
            <VericalCard thumbnail="/card4.png" />
            <VericalCard thumbnail="/card5.png" />
            <VericalCard thumbnail="/card6.png" />
            <VericalCard thumbnail="/card7.png" />
            <VericalCard thumbnail="/card8.png" />
          </div>
        </div>
      </main>
    </div>
  )
}
export default Home