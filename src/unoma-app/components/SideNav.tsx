import Image from "next/image";
import Link from "next/link";

interface Props {
    page: string
}

export default function SideNav({ page }: Props) {
  return (
    <div className="fixed left-0 transform transition duration-1000 ease-in-out sidenav md:-translate-x-0
        h-screen 2-64 md:w-72 bg-black px-5 py-5 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#008BEE]">
        <div className="font-bold text-black uppercase h1"><span className="text-white">Un</span><span className="text-blue">oma</span></div>
        <div className="pt-5 space-y-2.5">
            <div>
                <Link href="/">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "home" && "bg-blue"} px-5 rounded-lg space-x-2.5`}>
                        <Image src={"/grid.png"} width={20} height={20} />
                        <h3 className="h3 text-gray">Home</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/categories">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "categories" && "bg-blue"} px-5 rounded-lg space-x-2.5`}>
                        <Image src={"/categories.png"} width={20} height={20} />
                        <h3 className="h3 text-gray">Categories</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/trending">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "trending" && "bg-blue"} px-5 rounded-lg space-x-2.5`}>
                        <Image src={"/trending.png"} width={20} height={20} />
                        <h3 className="h3 text-gray">Trending</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/stream">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "stream" && "bg-blue"} px-5 rounded-lg space-x-2.5`}>
                        <Image src={"/airplay.png"} width={20} height={20} />
                        <h3 className="h3 text-gray">Live stream</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/playlist">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "playlist" && "bg-blue"} px-5 rounded-lg space-x-2.5`}>
                        <Image src={"/play.png"} width={20} height={20} />
                        <h3 className="h3 text-gray">Playlist</h3>
                    </a>
                </Link>
            </div>
        </div>
        <p className="py-5 font-semibold p text-gray">Podcaster</p>
        <div className="space-y-2.5">
            <div>
                <Link href="/start">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "start" && "bg-blue"} px-5 rounded-lg space-x-2.5`}>
                        <Image src={"/grid.png"} width={20} height={20} />
                        <h3 className="h3 text-gray">Start Podcast</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/add">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "add" && "bg-blue"} px-5 rounded-lg space-x-2.5`}>
                        <Image src={"/add.png"} width={20} height={20} />
                        <h3 className="h3 text-gray">Add Podcast</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/featured">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "featured" && "bg-blue"} px-5 rounded-lg space-x-2.5`}>
                        <Image src={"/feather.png"} width={20} height={20} />
                        <h3 className="h3 text-gray">Get Featured</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/contact">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "contact" && "bg-blue"} px-5 rounded-lg space-x-2.5`}>
                        <Image src={"/contact.png"} width={20} height={20} />
                        <h3 className="h3 text-gray">Contact</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/playlist">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "playlist" && "bg-blue"} px-5 rounded-lg space-x-2.5`}>
                        <Image src={"/play.png"} width={20} height={20} />
                        <h3 className="h3 text-gray">Playlist</h3>
                    </a>
                </Link>
            </div>
        </div>
        <p className="py-5 font-semibold p text-gray">Other</p>
        <div className="space-y-2.5">
            <div>
                <Link href="/community">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "community" && "bg-blue"} px-5 rounded-lg space-x-2.5`}>
                        <Image src={"/grid.png"} width={20} height={20} />
                        <h3 className="h3 text-gray">Community</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/subscription">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "subscription" && "bg-blue"} px-5 rounded-lg space-x-2.5`}>
                        <Image src={"/rss.png"} width={20} height={20} />
                        <h3 className="h3 text-gray">Subscription</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/setting">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "setting" && "bg-blue"} px-5 rounded-lg space-x-2.5`}>
                        <Image src={"/settings.png"} width={20} height={20} />
                        <h3 className="h3 text-gray">Get Featured</h3>
                    </a>
                </Link>
            </div>
        </div>
    </div>
  )
}