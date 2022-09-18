import { ConnectButton } from '@rainbow-me/rainbowkit'
import { MenuAlt1Icon } from "@heroicons/react/solid"
import {
  HomeIcon,
  UserCircleIcon,
  ChatIcon,
  TrendingUpIcon,
  CogIcon,
  XIcon
} from '@heroicons/react/outline'
import Divider from './divider'
import Link from 'next/link'

export default function Navbar({ title }) {
  {
    /**
     * we use this to get if the user is logged in or not
     * 
     * import {  useSigner } from "wagmi"
     * import { useState } from 'react'
     *     const [loggedIn, setLoggedIn] = useState(false)
     *      const { data: signer } = useSigner()
     *     async function getLoggedIn() {
     *        const address = await signer?._address
     *        if (address != null) {
     *          setLoggedIn(true)
     *         }
     *      }
     *     getLoggedIn()
     */
  }

  const menuControl = () => {
    document.querySelector(".items")?.classList.toggle("-translate-x-full")
  }

    return(
      <div className='lg:pl-64 relative z-50'>
        <div className="w-full bg-primary h-20 flex justify-between items-center px-5">
          <div className='flex space-x-4 items-center'>
            <button className='block lg:hidden' onClick={menuControl}><MenuAlt1Icon className='w-8 h-8 text-white' /></button>
            <h1 className="text-xl text-white font-semibold">{title}</h1>
          </div>
          <div>
            <ConnectButton 
              accountStatus={{
              smallScreen: 'avatar',
              largeScreen: 'full',
            }} />
          </div>
        </div>
        {
          //mobile navbar
        }
        <div className='w-64 bg-primary border-r border-white fixed inset-y-0 lg:hidden transition duration-200 -translate-x-full items'>
          <div className='p-5 flex flex-col h-full space-y-5'>
              <button className='w-8' onClick={menuControl}><XIcon className='w-8 h-8 text-white' /></button>
              <Link href="/">
                <a>
                  <div className="w-full py-2.5 px-2.5 hover:bg-white hover:bg-opacity-10 hover:cursor-pointer
                    hover:rounded-xl text-white font-semibold text-xl flex items-center">
                    <div><HomeIcon className="w-8 h-8" /></div>
                    <div>Home</div>
                  </div>
                </a>
              </Link>
              <Link href="/profile">
                <a>
                  <div className="w-full py-2.5 px-2.5 hover:bg-white hover:bg-opacity-10 hover:cursor-pointer
                    hover:rounded-xl text-white font-semibold text-xl flex items-center">
                    <div><UserCircleIcon className="w-8 h-8" /></div>
                    <div>Profile</div>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="w-full py-2.5 px-2.5 hover:bg-white hover:bg-opacity-10 hover:cursor-pointer
                    hover:rounded-xl text-white font-semibold text-xl flex items-center">
                    <div><TrendingUpIcon className="w-8 h-8" /></div>
                    <div>Trends</div>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="w-full py-2.5 px-2.5 hover:bg-white hover:bg-opacity-10 hover:cursor-pointer
                    hover:rounded-xl text-white font-semibold text-xl flex items-center">
                    <div><ChatIcon className="w-8 h-8" /></div>
                    <div>Messages</div>
                  </div> 
              <Divider />
              <div className="w-full py-2.5 px-2.5 hover:bg-white hover:bg-opacity-10 hover:cursor-pointer
                hover:rounded-xl text-white font-semibold text-xl flex items-center">
                <div><CogIcon className="w-8 h-8" /></div>
                <div>Settings</div>
              </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="w-full py-2.5 px-2.5 hover:bg-white hover:bg-opacity-10 hover:cursor-pointer
                    hover:rounded-xl text-white font-semibold text-xl flex items-center">
                    <div>
                      {
                        //could not find a horizontal ellipsis icon from heroicons/react@v1 so I paste the raw svg code
                      }
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>
                    </div>
                    <div>More</div>
                  </div>
                </a>
              </Link>
          </div>
        </div>
      </div>
    )
}