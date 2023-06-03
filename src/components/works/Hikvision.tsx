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
          Provided deployment and support of HikCentral SaaS web application for
          on-premises VMs on Linux/Windows servers or AWS cloud infrastructures.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Interacted directly with enterprise clients to collect/analyse system
          requirements, design and build customised SaaS solutions by using
          HikCentral application modules.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented network infrastructure among clients’ servers, data
          centres and operation terminals using TCP/IP, firewalls, WAN/LAN,
          routing/switching.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Conducted testing and troubleshooting for issues reported from clients
          and provided fix solutions to customers with developer team in a
          timely manner.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Managed development and deployment of projects with Agile development
          methodology.
        </li>
      </ul>
    </motion.div>
  );
};

export default Hikvision;
