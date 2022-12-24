import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {
    const   arrayChunk = (arr, n) => {
      const array = arr.slice();
      const chunks = [];
      while (array.length) chunks.push(array.splice(0, n));
      return chunks;
    };
  
    const { onIncrement, onDelete, onDecrement, counters } =
      this.props;
    return (
        <div>
          {arrayChunk(counters, 3).map((row, i) => (
          <div className="row row-items" key={i}>
            {row.map((counter) => (
              <Counter
                key={counter.id}
                counter={counter}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onDelete={onDelete}
              />
            ))}
          </div>
          ))}
        </div>
    );
  }
}

export default Counters;
