import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Hikvision = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Support Engineer
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">2019 - 2022</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Provided support and testing for video surveillance web/desktop
          applications and mobile apps: HikCentral and Hik-Connect by working
          closely with software engineer team.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Interacted directly with enterprise clients to design and build
          customised CCTV SaaS solutions by using HikCentral application modules
          based on clients’ system requirements.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Deployed HikCentral software on clients’ Linux/Windows server and
          implemented network infrastructure using TCP/IP, WAN/LAN,
          routing/switching with clients’ engineer team.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Conducted testing and troubleshooting of the issues reported from
          clients and provided fix solutions to customers in a timely manner
          with software engineer team.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          DManaged the progress of projects and provided presentations and
          trainings to customers.
        </li>
      </ul>
    </motion.div>
  );
};

export default Hikvision;
