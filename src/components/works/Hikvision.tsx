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
          My direct interactions with enterprise clients and business partners
          have enabled me to develop strong interpersonal skills and maintain a
          professional demeanor in all situations. Additionally, working closely
          with developer teams and managing multiple stakeholders has allowed me
          to cultivate teamwork and project management skills, essential to
          driving successful outcomes.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I have honed my expertise in networking by participating in
          enterprise-level network and surveillance projects. These experiences
          have provided me with a deep understanding of core networking concepts
          such as TCP/IP, WAN/LAN, Firewalls, Routing & Switching. My hands-on
          involvement in these projects has not only solidified my technical
          knowledge but also allowed me to apply my skills in real-world
          scenarios.
        </li>
      </ul>
    </motion.div>
  );
};

export default Hikvision;
