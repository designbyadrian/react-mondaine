import * as React from "react";
import * as PropTypes from "prop-types";

import { container } from "../style.css";

const Container: React.FC = ({ children }) => (
  <div className={container}>
    {children}
    <img
      alt=""
      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      width="100%"
    />
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
