import React, { Component } from "react";
import Counter from "./counter";
import { EthereumContext } from "../eth/context";

function Counters(props) {
  const {counters, onIncrement } =
  props;



  return <div className="counters">
    {counters === undefined && (
      <span>Loading..</span>
    )}
    { counters && (
          <div className="row">
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={onIncrement}
            />
          ))}
        </div>
    )}
  </div>
}


export default Counters;
