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
        Network Engineer
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">2019 - 2022</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Interacting directly with enterprise clients and business partners to
          gather and analyse project requirements, and presenting the designed
          solutions to the customer.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designing network topology using TCP/IP, WAN/LAN, Firewalls, Routing &
          Switching, and working closely with developer team to integrate
          software products into the projects.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Working with customers’ IT team for project deployment and involving
          in the troubleshooting process of any issues that may occur during
          project delivering.
        </li>
      </ul>
    </motion.div>
  );
};

export default Hikvision;
