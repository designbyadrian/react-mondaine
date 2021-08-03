import * as React from "react";
import { motion } from "framer-motion";

import { secondHand } from "../style.css";

import { secondHandMotion } from "../motions";

type HandProps = {
  rotation?: number;
};

const SecondHand: React.FC<HandProps> = ({ rotation = 0 }) => (
  <g>
    <motion.path
      className={secondHand}
      initial={false}
      animate={{ rotate: rotation }}
      {...secondHandMotion}
      d="M268,98c0-9.9-8.1-18-18-18s-18,8.1-18,18c0,8.9,6.5,16.3,15,17.7v125.8c-3.5,1.2-6,4.6-6,8.5
		c0,3.9,2.5,7.2,6,8.5V329h6v-70.5c3.5-1.2,6-4.6,6-8.5c0-3.9-2.5-7.2-6-8.5V115.7C261.5,114.3,268,106.9,268,98z"
    />
  </g>
);

export default SecondHand;
