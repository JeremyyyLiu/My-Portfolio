import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const UNSW = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Master of Engineering Science (Telecommunications)
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">2016 - 2018</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Centered my programming expertise on Python and developed a deep
          understanding of key concepts such as object-oriented programming,
          data structures, and algorithms.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I have also gained extensive knowledge in the field of networking,
          with a focus on concepts like TCP/IP, Routing, and Switching.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          This understanding of networking principles has enabled me to apply my
          Python skills in practical ways, such as during a group project in
          which we implemented a fat-tree network topology and achieved static &
          dynamic load balancing.
        </li>
      </ul>
    </motion.div>
  );
};

export default UNSW;
