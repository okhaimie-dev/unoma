import { PlayIcon } from "@heroicons/react/solid"

export default function Card() {
    return(
        <div className="max-w-[300px]">
            <div className="w-full h-[200px] hover:cursor-pointer bg-[url('/thumbnail.jpg')] rounded-t-xl relative">
                <button className="absolute bottom-0 right-0 mr-1 mb-1 w-16 h-16 bg-transparent rounded-full text-white flex justify-center items-center">
                    <PlayIcon className="w-15 h-15 text-green-500" />
                </button>
            </div>
            <div className="bg-white bg-opacity-10 p-2.5 rounded-b-xl">
                <p className="text-white max-w-[200px] truncate text-xs">By 0x555s5ds555sd55d8s55dsdsfdsfdsg</p>
                <h1 className="text-lg text-white">Introduction to crypto and defi</h1>
            </div>
        </div>
    )
}