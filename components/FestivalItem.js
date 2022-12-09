/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function FestivalItem({ festival }) {


  return (
    <li>
      <a href={`/festival/${festival.slug}`} class="relative block group">
        <img
          src={festival.mainImage}
          alt={festival.name}
          class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-80 rounded-lg"
        />
        <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
          <h3 class="text-xl font-semibold text-white">{festival.name}</h3>

          <span class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
            더보기
          </span>
        </div>
      </a>
    </li>
  );
}
