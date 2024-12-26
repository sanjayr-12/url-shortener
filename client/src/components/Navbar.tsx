const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Short it</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Your Links</a>
          </li>
          <li>
            <a>Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
