import Head from "next/head"
import SideNav from "../components/sidenav"
import Navbar from "../components/navbar"
import Card from "../components/card"

export default function Home() {
  return(
    <div>
      <Head>
        <title>Unoma</title>
      </Head>
      <main className="w-full flex">
        {
          //navigation list
        }
        <SideNav />
        {
          //content segment
        }
        <div className="flex-1 flex flex-col bg-primary">
          {
            //Top navbar
          }
          <Navbar title="Home" />
          {
            //content
          }
          <div className="min-h-screen px-5 bg-dark lg:ml-64">
            <div className="space-y-4 sm:space-y-0 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-4 xl:w-auto mt-12 place-items-center">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}