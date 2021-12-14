import { useState, useEffect } from "react";
import "./index.scss";
import PortfolioList from "./PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web App" },
    { id: "mobile", title: "Mobile App" },
    { id: "design", title: "Design" },
    { id: "content", title: "Content" },
  ];
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("featured");
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
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
            <div key={d.id} className="item">
              <img src={d.img} alt="item" />
              <h3>{d.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
