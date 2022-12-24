import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-4 col-md-3 row-items">
        <div class="card">
        <img class="card-img-top" src={require('../img/'+this.props.counter.img)}  alt=""/>
        <div class="card-body d-flex flex-column">
            <h2 class="product-brand">{this.props.counter.title}</h2> 
            <p class="product-short-des">a short line about the cloth..</p>
            <div className="mt-auto ">
          <div className="row row-item">
            <span style={{ fontSize: 24 }} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="row row-item">
            <button
              className="btn btn-secondary"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              Votar
            </button>
          </div>
          </div>
        </div>
        </div>

      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2";
    return classes;
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;
