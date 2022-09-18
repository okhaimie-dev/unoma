import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import SideNav from "../components/sidenav";
import { PencilIcon } from "@heroicons/react/solid"
import { PlusCircleIcon } from "@heroicons/react/outline"
import Card from "../components/card";
import ProfileModal from "../components/profilemodal"
import PodcastModal from "../components/podcastmodal"
import { useRecoilState } from 'recoil'
import { profilemodalatom } from "../atoms/profilemodalAtom"
import { podcastmodal } from "../atoms/podcastmodal"

export default function Profile () {
    const [open, setOpen] = useRecoilState(profilemodalatom)
    const [openPod, setOpenPod] = useRecoilState(podcastmodal)
    return(
    <div className="bg-dark">
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
            <Navbar title="Profile" />
            {
              //content
            }
            <div className="min-h-screen px-5 bg-dark lg:ml-64 flex flex-col items-center space-y-10">
                {
                    //profile
                }
                <div className="w-full flex flex-col space-y-2.5 items-center justify-center mt-20">
                    <div><Image src="/thumbnail.jpg" width={200} height={200} className="rounded-full" /></div>
                    <h3 className="text-white">0xac3C04c3656d029B69f57d8B422578F2A6a568b6</h3>
                    <div className="flex space-x-2.5 items-center">
                        <h1 className="text-xl text-white font-semibold">Victor Omorogbe</h1>
                        <button onClick={() => setOpen(true)}><PencilIcon className="w-8 h-8 text-secondary" /></button>
                    </div>
                    <p className="max-w-md text-white text-lg text-center">
                        I’m a software developer specializing in web development and occassionally android development. Currently, I’m focused on building fast and responsive web2 and recently web3 platforms that make the world a better place.
                    </p>
                </div>
                {
                    //your episodes
                }
                <div className="flex flex-col items-center">
                    <div className="flex items-center space-x-5">
                        <h1 className="text-2xl text-white font-semibold">Supreme Labs Podcast List</h1>
                        <button onClick={() => setOpenPod(true)}><PlusCircleIcon className="w-8 h-8 text-white" /></button>
                    </div>
                    <div className="px-5 w-full">
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
            </div>
          </div>
        </main>
        <ProfileModal />
        <PodcastModal />
      </div>
    )
}