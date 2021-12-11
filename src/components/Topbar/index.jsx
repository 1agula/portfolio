import "./index.scss";

export default function Topbar(props) {
  const { menuOpen, setMenuOpen } = props;

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a
            onClick={() => {
              setMenuOpen(false);
            }}
            href="#intro"
            className="logo"
          >
            уул.
          </a>
        </div>
        <div className="right">
          <div
            onClick={() => {
              setMenuOpen((previous) => {
                setMenuOpen(!previous);
              });
            }}
            className="hamburger"
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
