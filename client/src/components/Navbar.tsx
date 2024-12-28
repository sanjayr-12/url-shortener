import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className="navbar bg-base-100 fixed">
      <div className="flex-1" onClick={() => navigate("/")}>
        <a className="btn btn-ghost text-xl">Short it</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li onClick={() => navigate("/links")}>
            <a>Your Links</a>
          </li>
          <li onClick={() => navigate("/")}>
            <a>Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
