import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import styled from 'styled-components'


const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 4% auto;
  border-radius: 5px;
`;

const Graph = (props) => {
    const {scores, winner} = props;
    const win = winner.toLowerCase();
    var options = {
      title: 'House Scores',
      width: '50%',
      margin: '0 auto',
      // height: 260,
      backgroundColor: '#000',
      color: "white",
      border: '1px solid yellow',
      // opacity: '.5',
      is3D: true,
      hAxis: {
        textStyle:{color: '#FFF'}
      },
      legend: 'none',
    titleTextStyle: { color: '#FFF' }
    // rect: {color: '#000'}
    };


    const data = [
        ["", "", { role: "style" }],
        ["Gryffindor", scores.g, "color: #ed1e14"],
        ["Slytherin", scores.s, "color: #009b3a"],
        ["Ravenclaw", scores.r, "color: #0249ce"],
        ["HufflePuff", scores.h, "color: #f9ef27"],
      ];
      
    return (
      <Div>
        <Chart chartType="ColumnChart" width="100%" height="400px" data={data} options={options} />
      </Div>
    );
}

export default Graph