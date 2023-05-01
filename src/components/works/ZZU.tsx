import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ZZU = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Bachelor of Information Engineering
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">2012 - 2016</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built solid foundation of mathematics and computer science knowledge
          via courses such as Calculus, Linear Algebra, Probability &
          Mathematical Statistics, Computer Network, Operating System etc.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          In addition to my mathematical prowess, I have also developed a robust
          coding ability, mastering languages such as C, Java, and Assembly
          Language.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          One notable accomplishment was my final project, in which I focused on
          wireless network security and penetration test using Kali Linux.
        </li>
      </ul>
    </motion.div>
  );
};

export default ZZU;
