import * as React from "react";
import { motion } from "framer-motion";

import { hourHand } from "../style.css";

import { handMotion } from "../motions";

type HandProps = {
  rotation?: number;
};

const HourHand: React.FC<HandProps> = ({ rotation = 0 }) => (
  <g data-testid="hour-hand">
    <motion.polygon
      className={hourHand}
      initial={false}
      animate={{ rotate: rotation }}
      {...handMotion}
      points="265,304 235,304 238,92 262,92"
    />
  </g>
);

export default HourHand;
