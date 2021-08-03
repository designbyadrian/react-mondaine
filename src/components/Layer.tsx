import * as React from "react";
import * as PropTypes from "prop-types";

import { layer, svg } from "../style.css";

const Layer: React.FC = ({ children }) => (
  <div className={layer}>
    <svg
      className={svg}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 500 500"
    >
      {children}
    </svg>
  </div>
);

Layer.propTypes = {
  children: PropTypes.node,
};

export default Layer;
