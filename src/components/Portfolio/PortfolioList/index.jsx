import "./index.scss";

export default function PortfolioList(props) {
  const { title, active, setSelected, id } = props;
  return (
    <div>
      <li
        className={active ? "portfoliolist active" : "portfoliolist"}
        onClick={() => {
          setSelected(id);
        }}
      >
        {title}
      </li>
    </div>
  );
}
