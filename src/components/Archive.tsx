import ArchiveCard from "./ArchiveCard";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          View the archive
        </p>
      </div>

      {/* showing archive cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Project 1"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
      maiores consequatur dicta voluptates porro error maxime facere est eveniet
      at? Unde repellat pariatur dignissimos quam doloribus suscipit, atque ad
      maiores."
          listItem={["Next.js", "Typescript", "Nest.js"]}
          link="#"
        />
        <ArchiveCard
          title="Project 1"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
      maiores consequatur dicta voluptates porro error maxime facere est eveniet
      at? Unde repellat pariatur dignissimos quam doloribus suscipit, atque ad
      maiores."
          listItem={["Next.js", "Typescript", "Nest.js"]}
          link="#"
        />
        <ArchiveCard
          title="Project 1"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
      maiores consequatur dicta voluptates porro error maxime facere est eveniet
      at? Unde repellat pariatur dignissimos quam doloribus suscipit, atque ad
      maiores."
          listItem={["Next.js", "Typescript", "Nest.js"]}
          link="#"
        />
        <ArchiveCard
          title="Project 1"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
      maiores consequatur dicta voluptates porro error maxime facere est eveniet
      at? Unde repellat pariatur dignissimos quam doloribus suscipit, atque ad
      maiores."
          listItem={["Next.js", "Typescript", "Nest.js"]}
          link="#"
        />
        <ArchiveCard
          title="Project 1"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
      maiores consequatur dicta voluptates porro error maxime facere est eveniet
      at? Unde repellat pariatur dignissimos quam doloribus suscipit, atque ad
      maiores."
          listItem={["Next.js", "Typescript", "Nest.js"]}
          link="#"
        />
        <ArchiveCard
          title="Project 1"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
      maiores consequatur dicta voluptates porro error maxime facere est eveniet
      at? Unde repellat pariatur dignissimos quam doloribus suscipit, atque ad
      maiores."
          listItem={["Next.js", "Typescript", "Nest.js"]}
          link="#"
        />
      </div>

      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
