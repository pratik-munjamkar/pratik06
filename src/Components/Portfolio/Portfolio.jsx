import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
import { webPortfolio, designPortfolio, resumePortfolio, frontendPortfolio, backendPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id:"resume",
      title:"Resume"
    },
    {
      id: "web",
      title: "Web App",
    },

    {
      id: "design",
      title: "Design",
    },
    {
      id: "frontend",
      title: "Frontend source",
    },
    {
      id: "backend",
      title: "Backend source",
    },



  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;

      case "resume":
        setData(resumePortfolio);
        break;
      case "frontend":
        setData(frontendPortfolio);
        break;
      case "backend":
        setData(backendPortfolio);          break;                    
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item, id) => (
          <PortfolioList
            key={id}
            title={item.title}
            active={selected === item.id} // this checks if selected is true or false
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d, id) => (
            <a href={d.web} target="_blank" rel="noreferrer">
            <div className="item" key={id}>
            <img src={d.img} alt="" />
            
            
            <h3>{d.title}</h3>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
}