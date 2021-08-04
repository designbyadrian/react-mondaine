import * as React from "react";
import { motion } from "framer-motion";

import { minuteHand } from "../style.css";

import { handMotion } from "../motions";

type HandProps = {
  rotation?: number;
};

const MinuteHand: React.FC<HandProps> = ({ rotation = 0 }) => (
  <g data-testid="minute-hand">
    <motion.polygon
      className={minuteHand}
      initial={false}
      animate={{ rotate: rotation }}
      {...handMotion}
      points="265,304 235,304 240,28 260,28"
    />
  </g>
);

export default MinuteHand;
