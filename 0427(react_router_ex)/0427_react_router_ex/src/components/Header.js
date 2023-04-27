import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <span>React Router 실습</span>
      <div>
        <Link to="/student/sean">학생</Link>
        <Link to="/student/codingon" className="menu-item">
          코딩온
        </Link>
        <Link to="/student/new?name=jisu" className="menu-item">
          searchParams
        </Link>
        <Link to="/products" className="menu-item">
          photo
        </Link>
      </div>
    </header>
  );
};

export default Header;
