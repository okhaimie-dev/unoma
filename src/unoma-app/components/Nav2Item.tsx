import Image from "next/image"

function Nav2Item() {
  return (
    <button className="space-x-2.5 rounded-lg bg-blue min-w-fit px-5 py-2.5 outline-none">
        <div className="relative flex-shrink-0 flex items-center space-x-2.5">
            <Image src={"/compass.png"} width={20} height={20} />
            <span className="text-white">Podcast</span>
        </div>
    </button>
  )
}

export default Nav2Item
