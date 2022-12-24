import React, { Component } from "react";
import Counters from "./components/counters";
import {registerProduct }from "./BlockChainCalls";
import { createProvider } from './eth/provider';
import { createInstance } from './eth/registry';
import { EthereumContext } from './eth/context';
import { useContext, useState, useEffect } from "react";
import {vote}from "./BlockChainCalls";

class App extends Component {
  
   sendTx = async (registry,provider,name,imgUrl) => {
    
    try {
      const response = await registerProduct(registry, provider, name,imgUrl);
      console.log(response);
    } catch(err) {
      console.log(err)
    } 
  }
  
  state = {
    counters: [
      //{ id: 1, value: 0,img:"card1.jpg",title:"CAMISETA BASICS BLANCA"},
      //{ id: 2, value: 0,img:"card2.jpg",title:"CAMISETA HERETICS SAN MIGUEL" },
      //{ id: 3, value: 0,img:"card3.jpg",title:"CAMISETA HERETICS" },
      /*{ id: 4, value: 0,img:"card4.jpg",title:"SUDADERA BASICS BLANCA"  },
      { id: 5, value: 0,img:"card4.jpg",title:"SUDADERA BASICS BLANCA"  },
      { id: 6, value: 0,img:"card4.jpg",title:"SUDADERA BASICS BLANCA"  },*/

    ],
  };
  componentDidMount() {
    const provider = createProvider();

    const registry = createInstance(provider);
    registry.getProducts().then((product)=>{

      var products=[];
      product.forEach( (x)=>{
        products.push({id:Number(x[2]),title:x[0],value:Number(x[1]),img:x[3]});
      });
      this.setState({counters:products});
    })
    ;
  }
  
  handleIncrement = (counter) => {
    const provider = createProvider();
    const registry = createInstance(provider);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
      try {
         vote(registry, provider,index)
         
         .then((response)=>{
          console.log(response);
          counters[index] = { ...counters[index] };
          counters[index].value++;
          this.setState({ counters });
         });
      } catch(err) {
        console.log(err)
      } 


  };


  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };


  handleRestart = () => {
    window.location.reload();
  };
 /* initDB=(registry,provider)=>{
    this.state.counters.forEach((x)=>{
      this.sendTx(registry,provider,x.title,x.img)
    })
  }*/

  render() {
    const provider = createProvider();

    const registry = createInstance(provider);
    //this.initDB(registry,provider);
    const ethereumContext = { provider, registry };

    return (
          <div >
                <nav className="navbar navbar-dark bg-dark">
                  <a className="navbar-brand" href="/">
                    <img className="logo" src={require("./img/logo.png")} alt="logo" />
                  </a>
                </nav>
                <div className="container main">
                  <EthereumContext.Provider value={ethereumContext}>
                      <Counters
                        counters={this.state.counters}
                        onIncrement={this.handleIncrement}
                      />
                  </EthereumContext.Provider>

                </div>
          </div>

    );
  }
}

export default App;
