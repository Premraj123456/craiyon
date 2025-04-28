import Image from "next/image";

export default function ImageCard({ imageUrl, caption }) {
  return (
    <div className="flex flex-col items-center my-2 font-normal text-sm space-y-2 bg-gray-800 rounded-lg overflow-hidden shrink-0">
      <Image alt={caption} width={120} height={120} src={imageUrl}></Image>
      <p className="pb-2">{caption}</p>
    </div>
  );
}
