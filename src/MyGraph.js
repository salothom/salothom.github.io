import React from "react";
import './graph.css';

export default function MyGraph() {
  const skills = {
    currencies: [
      {
        currencyName: "JavaScript",
        marketCap: 80
      },
      {
        currencyName: "html/css",
        marketCap: 85
      },
      {
        currencyName: "Angular",
        marketCap: 70
      },
      {
        currencyName: "React",
        marketCap: 75
      },
      {
        currencyName: "Agile",
        marketCap: 85
      },
      {
        currencyName: "Swift",
        marketCap: 60
      }
    ]
  };

  return (
    <div>
      <Graph
        currencies={skills.currencies}
        graphTitle="My Skills!!!!!"
      />
    </div>
  );
}

class Graph extends React.Component {

  renderLines() {
    return Array(10)
      .fill(null)
      .map((el, i) => <Line left={i * 10} key={i} />);
  }

  renderBars() {
    const { currencies } = this.props;

    return currencies.map(currency => {
      const percent = currency.marketCap ;
      return <Bar percent={percent} key={currency.currencyName} />;
    });
  }

  render() {
    return (
      <div className="graph-wrapper">
        {/* <h2> {this.props.graphTitle} </h2> */}

        <div className="graph">
          <BarTextContent currencies={this.props.currencies} />

          <div className="bar-lines-container">
            {/* {this.renderLines()} */}
            {this.renderBars()}
          </div>

          <div style={{ width: "12%" }} />
          {/* <Markers /> */}
        </div>
      </div>
    );
  }
}



const Bar = ({ percent }) => {
  return <div className="bar" style={{ width: `${percent}%` }} />;
};

const BarTextContent = ({ currencies }) => {
  return (
    <div className="bar-text-content">
      {currencies.map((currency,i) => (
        <div key={i}className="text">{currency.currencyName}</div>
      ))}
    </div>
  );
};

const Line = ({ left }) => {
  return <div className="line" style={{ left: `${left}%` }} />;
};
