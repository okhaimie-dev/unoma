import type { NextPage } from 'next'
import Head from 'next/head'
import HorizontalCard from '../components/HorizontalCard'
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
      <main className='flex bg-black min-h-screen scrollbar-thin scrollbar-thumb-[#008BEE]'>
        <div className='w-72'><SideNav page='home' /></div>
        <div className='flex-1 flex flex-col overflow-x-scroll overflow-y-scroll scrollbar-none'>
          <TopNav />
          <Nav2 />
          <div className='px-5 grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 border-b-2 border-b-purple py-5'>
            <VericalCard thumbnail="/card1.png" />
            <VericalCard thumbnail="/card2.png" />
            <VericalCard thumbnail="/card3.png" />
            <VericalCard thumbnail="/card4.png" />
            <VericalCard thumbnail="/card5.png" />
            <VericalCard thumbnail="/card6.png" /> 
            <VericalCard thumbnail="/card7.png" />
            <VericalCard thumbnail="/card8.png" />
          </div>
          <div className='p-5'>
            <h2 className='h2 text-white'>Top 5 Podcaster</h2>
            <div className='flex space-x-5 py-2.5'>
              <HorizontalCard thumbnail='' />
              <HorizontalCard thumbnail='' />
              <HorizontalCard thumbnail='' />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Home