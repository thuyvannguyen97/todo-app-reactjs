import React, { Component } from 'react';
import './Bar.css';

class Bar extends Component {
  render() {
    return (
      <div className="Bar">
        <div className="status-bar">
          <div className="signal">
            <img className="network" src="https://cdn.glitch.com/445207dc-8744-4b60-9476-dde50d3ba7c3%2Fnetwork.svg?v=1602617243452" alt="network"/>
            <p>Viettel</p>
            <img className="wifi" src="https://cdn.glitch.com/445207dc-8744-4b60-9476-dde50d3ba7c3%2Fwifi.svg?v=1602617056130" alt="wifi"/>
          </div>
          <p className="time">9:41 AM</p>
          <div className="battery">
            <p>70%</p>
            <img src="https://cdn.glitch.com/445207dc-8744-4b60-9476-dde50d3ba7c3%2Flow-battery.svg?v=1602598883782" alt="battery"/>
          </div>
        </div>
        <div className="nav-bar">
          <a>
            <img src="https://cdn.glitch.com/445207dc-8744-4b60-9476-dde50d3ba7c3%2Flist.svg?v=1602598679881" alt="menu"/>
          </a>
          <h1>DAILIST</h1>
          <div className="space"></div>
        </div>
      </div>
    );
  }
}

export default Bar;
