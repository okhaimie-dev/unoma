import Image from "next/image";

export default function TopNav() {
  return (
    <div className="flex w-full p-5 border-2 border-b-purple space-x-5">
      <div className="relative w-full flex-1">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="text-white text-sm rounded-lg w-full pl-10 p-2.5 bg-[#343646] outline-none placeholder-white border border-purple"
          placeholder="Search presenters, viewers, and podcasts across the globe"
          required
        />
      </div>
      <div className="flex max-w-xs items-center space-x-5">
        <div className=" p-2.5 bg-blue w-10 h-10 rounded-full flex items-center hover:cursor-pointer">
            <Image src={"/bell.png"} width={25} height={25} />
        </div>
        <button className="bg-blue p-2.5 rounded-lg text-white">Connect Wallet</button>
      </div>
    </div>
  )
}