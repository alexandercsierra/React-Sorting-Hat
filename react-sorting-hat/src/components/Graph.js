import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";




const Graph = (props) => {
    const {scores, winner} = props;
    const win = winner.toLowerCase();
    var options = {
      title: 'title',
      width: '50%',
      margin: '0 auto',
      // height: 260,
      backgroundColor: '#000',
      is3D: true
    };

    if (win === "gryffindor"){
      options.backgroundColor = "red";
    } else if (win === "slytherin"){
      options.backgroundColor = "green";
    } else if (win === "ravenclaw"){
      options.backgroundColor = "blue";
    } else if (win === "hufflepuff"){
      options.backgroundColor = "yellow";
    }


    const data = [
        ["Year", "House Points", { role: "style" }],
        ["Gryffindor", scores.g, "color: #ed1e14"],
        ["Slytherin", scores.s, "color: #009b3a"],
        ["Ravenclaw", scores.r, "color: #0249ce"],
        ["HufflePuff", scores.h, "color: #f9ef27"],
      ];
      
    return (
      <div className="App">
        <Chart chartType="BarChart" width="100%" height="400px" data={data} options={options} />
      </div>
    );
}

export default Graph