import Image from "next/image";
import { photos, photos2 } from "../dist/imageData";

export default function PhotosPage() {

    // const res = await fetch('https://picsum.photos/v2/list');
    // const photos = await res.json();


    return (
      <section className="flex flex-col mt-8 items-center">
        <p className="font-semibold mb-4">Inspirations</p>
        <div className="flex gap-2">
            <ul className="grid grid-cols-1 gap-2 ">
            {photos.map(photo => (
                <li key={photo.id}>
                <Image className="rounded-md h-auto" src={photo.url} alt={photo.alt} width="300" height={"600"} />
                </li>
            ))}
            </ul>

            <ul className="grid grid-cols-1 gap-2 ">
            {photos2.map(photo => (
                <li key={photo.id}>
                <Image className="rounded-md h-auto" src={photo.url} alt={photo.alt} width="300" height={"600"} />
                </li>
            ))}
            </ul>
        </div>

        <p className="text-gray-400 text-sm font-medium my-8">Want more images? Join our Discord</p>
      </section>
    );
  }
  