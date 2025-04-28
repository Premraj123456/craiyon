"use client";

import { Brush } from "lucide-react";
import ImageCard from "./components2/ImageCard";
import PhotosPage from "./components2/photosPage";
import { styleData } from "./dist/imageData";
import FaqCard from "./components2/faqCard";
import FaqData from "./dist/faqData";
import { Accordion } from "@/components/ui/accordion";
import DropDownMenu from "./components2/dropdownMenu";
import { Switch } from "@/components/ui/switch";
import { useRef, useState } from "react";
import {
  IGCwithSkeleton,
  IGCwithoutSkeleton,
} from "./components2/imageGeneratedCard";
import Image from "next/image";

export default function App() {
  const inputRef = useRef(null);
  const [imageLink, SetImageUrl] = useState("");

  async function generate() {
    SetImageUrl("started");
    const input_value = inputRef.current.value;
    const response = await fetch(`/api/generate_image?prompt=${input_value}`);
    const { image_url } = await response.json();
    SetImageUrl(image_url);

    console.log(image_url);
    // return image_url
  }

  return (
    <>
      <main className="font-bold px-4">
        <section>
          <>
            <div className="flex flex-col items-center m-8 mt-12 space-y-2">
              <h1 className="text-4xl">
                Cr<span className="text-amber-700">ai</span>yon
              </h1>
              <p className="text-lg font-normal text-gray-400">
                Create AI Art with our free AI image generator.
              </p>
            </div>
            <input
              ref={inputRef}
              type="text"
              placeholder="A cute fox with red hat"
              className="placeholder-gray-400 w-full bg-gray-700 rounded-md pl-3 py-2 mb-3 font-light h-11"
            ></input>
            <button
              onClick={generate}
              className="w-full bg-amber-700 h-11 rounded-lg my-2 font-bold flex items-center justify-center"
            >
              <Brush size={20} className="mr-2"></Brush> Draw Now
            </button>
          </>
          {imageLink === "started" ? <IGCwithSkeleton /> : null}
          {imageLink.length > 9 ? (
            <Image
              className="mt-4 rounded-lg w-full"
              src={imageLink}
              alt={inputRef.current.value}
              width={500}
              height={70}
            />
          ) : null}

          <div className="border border-gray-600 rounded-lg p-3 mt-5">
            <div className="flex justify-between font-normal ">
              <p className="text-gray-400">Style (v4 Auto)</p>
              <p className=""> View All</p>
            </div>

            <div className="flex flex-row space-x-2.5 overflow-auto">
              {styleData.map((styled, key) => (
                <ImageCard
                  key={key}
                  imageUrl={styled.image}
                  caption={styled.caption}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-row mt-4 justify-evenly space-x-2.5 text-gray-400 font-normal">
            <div className="w-full flex flex-row border border-gray-600 rounded-lg pl-3 justify-between items-center">
              <p>Size</p>
              <DropDownMenu />
            </div>
            <div className=" justify-between items-center w-full flex flex-row border border-gray-600 rounded-lg p-3">
              <p>Private</p>
              <Switch
                id="private"
                className=" data-[state=checked]:bg-amber-600 data-[state=unchecked]:bg-gray-600"
              />
            </div>
          </div>

          <div className="flex flex-row space-x-2.5 border border-gray-600 rounded-lg p-3 mt-4 text-gray-400 font-normal">
            <p>Exclude</p>
          </div>
        </section>

        <PhotosPage />

        <section className="text-gray-300 mb-4">
          <Accordion type="single" collapsible>
            {FaqData.map((faq) => (
              <FaqCard
                key={faq.id}
                id={faq.id}
                title={faq.title}
                description={faq.description}
              />
            ))}
          </Accordion>
        </section>
      </main>
    </>
  );
}
