import * as React from "react";

import { face } from "../style.css";

const Face: React.FC = () => (
  <g data-testid="face">
    <circle className={face} cx="250" cy="250" r="250" />
  </g>
);

export default Face;
