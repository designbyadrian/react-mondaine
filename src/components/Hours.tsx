import * as React from "react";

import { hourMark } from "../style.css";

const Hours: React.FC = () => (
  <g>
    <rect className={hourMark} x="242" y="18" width="16" height="57" />
    <rect
      className={hourMark}
      x="140.2"
      y="45.3"
      transform="matrix(0.866 -0.5 0.5 0.866 -17.0202 84.0075)"
      width="16"
      height="57"
    />
    <rect
      className={hourMark}
      x="65.8"
      y="119.8"
      transform="matrix(0.5 -0.866 0.866 0.5 -91.5063 138.0063)"
      width="16"
      height="57"
    />
    <rect
      className={hourMark}
      x="38.5"
      y="221.5"
      transform="matrix(4.479268e-11 -1 1 4.479268e-11 -203.5 296.5)"
      width="16"
      height="57"
    />
    <rect
      className={hourMark}
      x="65.8"
      y="323.2"
      transform="matrix(-0.5 -0.866 0.866 -0.5 -193.9787 591.5063)"
      width="16"
      height="57"
    />
    <rect
      className={hourMark}
      x="140.2"
      y="397.7"
      transform="matrix(-0.866 -0.5 0.5 -0.866 63.5202 869.4925)"
      width="16"
      height="57"
    />
    <rect
      className={hourMark}
      x="242"
      y="425"
      transform="matrix(-1 -8.981273e-11 8.981273e-11 -1 500 907)"
      width="16"
      height="57"
    />
    <rect
      className={hourMark}
      x="343.8"
      y="397.7"
      transform="matrix(-0.866 0.5 -0.5 -0.866 869.4925 619.4925)"
      width="16"
      height="57"
    />
    <rect
      className={hourMark}
      x="418.2"
      y="323.2"
      transform="matrix(-0.5 0.866 -0.866 -0.5 943.9787 158.4937)"
      width="16"
      height="57"
    />
    <rect
      className={hourMark}
      x="445.5"
      y="221.5"
      transform="matrix(-1.348328e-10 1 -1 -1.348328e-10 703.5 -203.5)"
      width="16"
      height="57"
    />
    <rect
      className={hourMark}
      x="418.2"
      y="119.8"
      transform="matrix(0.5 0.866 -0.866 0.5 341.5063 -295.0063)"
      width="16"
      height="57"
    />
    <rect
      className={hourMark}
      x="343.8"
      y="45.3"
      transform="matrix(0.866 0.5 -0.5 0.866 84.0075 -165.9925)"
      width="16"
      height="57"
    />
  </g>
);

export default Hours;
