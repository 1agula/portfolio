import "./index.scss";

export default function index(props) {
  const { menuOpen, setMenuOpen } = props;
  const handleClick = () => {
    setMenuOpen(false);
  };
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={handleClick}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={handleClick}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={handleClick}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={handleClick}>
          <a href="#works">Works</a>
        </li>
        <li onClick={handleClick}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
