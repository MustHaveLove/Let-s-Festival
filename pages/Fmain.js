import React from "react";
import Layout from "../components/Layout";
import FestivalItem from "../components/FestivalItem";
import data from "../utils/data";

import { Tab } from "@headlessui/react";

export default function Fmain() {
  return (
    <Layout title="Fmain">
      {/* <Season></Season>
      <Kakao_intro></Kakao_intro> */}
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          {data.festivals.map((festival) => (
            <FestivalItem
              festival={festival}
              key={festival.slug}
            ></FestivalItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
