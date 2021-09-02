import React from "react";
import "./graph.css";

export default function MyGraph() {
  const skills = {
    catigory: [
      {
        skillType: "JS",
        percent: 81
      },
      {
        skillType: "html/css",
        percent: 85
      },
      {
        skillType: "Angular",
        percent: 70
      },
      {
        skillType: "React",
        percent: 75
      },
      {
        skillType: "Agile",
        percent: 85
      },
      {
        skillType: "Swift",
        percent: 60
      }
    ]
  };

  return (
    <>
      <Graph catigory={skills.catigory} graphTitle="My Skills!!!!!" />
    </>
  );
}

class Graph extends React.Component {
  renderLines() {
    return Array(10)
      .fill(null)
      .map((el, i) => <Line left={i * 10} key={i} />);
  }

  renderBars() {
    const { catigory } = this.props;

    return catigory.map(skillCat => {
      const percent = skillCat.percent;
      return <Bar percent={percent} key={skillCat.skillType} />;
    });
  }

  render() {
    return (
      <div className="graph">
        <BarTextContent catigory={this.props.catigory} />

        <div className="bar-lines-container">
          {this.renderBars()}
        </div>

        <div style={{ width: "12%" }} />
      </div>
    );
  }
}

const Bar = ({ percent }) => {
  return <div className="bar" style={{ width: `${percent}%` }} />;
};

const BarTextContent = ({ catigory }) => {
  return (
    <div className="bar-text-content">
      {catigory.map((skillCat, i) => (
        <div key={i} className="text">
          {skillCat.skillType}
        </div>
      ))}
    </div>
  );
};

const Line = ({ left }) => {
  return <div className="line" style={{ left: `${left}%` }} />;
};
