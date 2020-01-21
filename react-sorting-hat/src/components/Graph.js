import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";


const Graph = (props) => {
    const {scores} = props;
    const data = [
        ["Year", "House Points", { role: "style" }],
        ["Gryffindor", scores.g, "color: #ed1e14"],
        ["Slytherin", scores.s, "color: #009b3a"],
        ["Ravenclaw", scores.r, "color: #0249ce"],
        ["HufflePuff", scores.h, "color: #f9ef27"],
      ];
      
    return (
      <div className="App">
        <Chart chartType="BarChart" width="100%" height="400px" data={data} />
      </div>
    );
}

export default Graph