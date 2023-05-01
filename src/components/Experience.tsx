import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import ZZU from "./works/ZZU";
import UNSW from "./works/UNSW";
import Hikvision from "./works/Hikvision";
import FotoPie from "./works/FotoPie";

const Experience = () => {
  const [ZZUStatus, setZZUStatus] = useState(true);
  const [UNSWStatus, setUNSWStatus] = useState(false);
  const [HikvisionStatus, setHikvisionStatus] = useState(false);
  const [FotoPieStatus, setFotoPieStatus] = useState(false);

  // set onClick handler
  const handleZZUniversity = () => {
    setZZUStatus(true);
    setUNSWStatus(false);
    setHikvisionStatus(false);
    setFotoPieStatus(false);
  };

  const handleUniversityNSW = () => {
    setZZUStatus(false);
    setUNSWStatus(true);
    setHikvisionStatus(false);
    setFotoPieStatus(false);
  };

  const handleHikvisionCompany = () => {
    setZZUStatus(false);
    setUNSWStatus(false);
    setHikvisionStatus(true);
    setFotoPieStatus(false);
  };

  const handleFotoPieCompany = () => {
    setZZUStatus(false);
    setUNSWStatus(false);
    setHikvisionStatus(false);
    setFotoPieStatus(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="My Experience" titleNo="02" />

      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleZZUniversity}
            className={`${
              ZZUStatus
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
          >
            Zhengzhou University
          </li>
          <li
            onClick={handleUniversityNSW}
            className={`${
              UNSWStatus
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
          >
            UNSW
          </li>
          <li
            onClick={handleHikvisionCompany}
            className={`${
              HikvisionStatus
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
          >
            Hikvision
          </li>
          <li
            onClick={handleFotoPieCompany}
            className={`${
              FotoPieStatus
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
          >
            FotoPie Bootcamp
          </li>
        </ul>

        {/* only render the component that is true */}
        {ZZUStatus && <ZZU />}
        {UNSWStatus && <UNSW />}
        {HikvisionStatus && <Hikvision />}
        {FotoPieStatus && <FotoPie />}
      </div>
    </section>
  );
};

export default Experience;
