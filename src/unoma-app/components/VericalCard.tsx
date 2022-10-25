import Image from "next/image";

interface Props {
    thumbnail: string
}

export default function VericalCard({ thumbnail }: Props) {
  return (
    <div>
      <div>
        <Image src={thumbnail} width={185} height={150} />
      </div>
      <h3 className="h3 text-white">Podcast Title</h3>
      <p className="p text-white">10 episodes</p>
    </div>
  )
}