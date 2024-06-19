"use client";
import React from "react";
import Image from "next/image";
import { SimplePokemon } from "@/app/dashboard/pokemons/interfaces/simple-pokemon";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";

const PokemonItem = ({ name, url, id }: SimplePokemon) => {
  return (
    <>
      <div className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
        <Link href={"/dashboard/counter"}>
          <div className="mt-2 ml-2">
            <CiHeart color="red" className="w-5 h-5" />
          </div>
        </Link>
        <div className="relative pt-10 px-10 flex items-center justify-center">
          <Image
            className="relative w-40"
            src={url!}
            alt=""
            width={150}
            height={150}
            priority={false}
          />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <span className="block opacity-75 -mb-1 text-black"></span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl text-black capitalize">
              {name}
            </span>
            <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center"></span>
          </div>
          <button
            onClick={() => {}}
            className="flex p-2 mt-2 items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-full"
          >
            More information
          </button>
        </div>
      </div>
    </>
  );
};

export default PokemonItem;
