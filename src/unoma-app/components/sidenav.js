import {
    MicrophoneIcon,
    HomeIcon,
    UserCircleIcon,
    ChatIcon,
    TrendingUpIcon,
    CogIcon,
} from '@heroicons/react/outline'
import Divider from "../components/divider"
import Link from 'next/link'

export default function SideNav() {
    return(
        <div className="w-64 h-screen bg-primary p-5 hidden lg:block fixed">
          <div className="w-full flex flex-col">
            <div className="flex justify-center"><MicrophoneIcon className="text-white w-20 h-20" /></div>
            <div className="flex flex-col mt-5 space-y-2.5">
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