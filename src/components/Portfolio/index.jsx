import { useState, useEffect } from "react";
import "./index.scss";
import PortfolioList from "./PortfolioList";
import {
  featuredPortfolio,
  nodejsPortfolio,
  reactPortfolio,
  javascriptPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const list = [
    { id: "featured", title: "Featured" },
    { id: "nodejs", title: "Node.js" },
    { id: "react", title: "ReactJS" },
    { id: "javascript", title: "Javascript" },
    { id: "content", title: "Content" },
  ];
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("featured");
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "nodejs":
        setData(nodejsPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "javascript":
        setData(javascriptPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList
              active={selected === item.id}
              setSelected={setSelected}
              key={item.id}
              id={item.id}
              title={item.title}
            />
          );
        })}
      </ul>
      <div className="container">
        {data.map((d) => {
          return (
            <a
              key={d.id}
              href={d.url}
              target="_blank"
              rel="noreferrer"
              className="item"
            >
              <img src={d.img} alt="item" />
              <h3>{d.title}</h3>
            </a>
          );
        })}
      </div>
    </div>
  );
}
