import * as React from "react";
import * as PropTypes from "prop-types";
import getSeconds from "date-fns/getSeconds";
import getMinutes from "date-fns/getMinutes";
import getHours from "date-fns/getHours";

import Container from "./components/Container";
import Layer from "./components/Layer";
import HourHand from "./components/HourHand";
import MinuteHand from "./components/MinuteHand";
import SecondHand from "./components/SecondHand";

import Face from "./components/Face";
import Hours from "./components/Hours";
import Minutes from "./components/Minutes";

import { layer } from "./style.css";

import {
  getHour,
  getMinute,
  getSecond,
  TimeAction,
  TimeUnitState,
  useInterval,
} from "./helpers";

export interface MondaineProps {
  /**
   * Optional React component positioned as logo on the clock face
   */
  children?: React.ReactNode;
}

function getInitialState() {
  const now = new Date();

  let s = getSeconds(now),
    m = getMinutes(now),
    h = getHours(now);

  return {
    second: getSecond(s),
    minute: getMinute(m),
    hour: getHour(h, m),
  };
}

function reducer(state: TimeUnitState, action: TimeAction): TimeUnitState {
  if (action.type === "tick") {
    const now = new Date();
    let s = getSeconds(now),
      m = getMinutes(now),
      h = getHours(now);

    return {
      second: getSecond(s, state.second),
      minute: getMinute(m, state.minute),
      hour: getHour(h, m, state.hour),
    };
  }
  throw new Error();
}

const Mondaine = ({ children }: MondaineProps) => {
  const [time, dispatchTime] = React.useReducer(reducer, null, getInitialState);

  useInterval(() => {
    dispatchTime({ type: "tick" });
  }, 1000);

  return (
    <Container>
      <Layer>
        <Face />
        <Hours />
        <Minutes />
      </Layer>
      <div className={layer}>{children}</div>
      <Layer>
        <HourHand rotation={time.hour.rotation} />
        <MinuteHand rotation={time.minute.rotation} />
        <SecondHand rotation={time.second.rotation} />
      </Layer>
    </Container>
  );
};

Mondaine.propTypes = {
  children: PropTypes.node,
};

export default Mondaine;
