import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <navbar className="navbar">
        <nav className="navbar-header">
          <ul>
            <li>
              <Link className="h-color" href="/">
                Russinho
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="navbar-items">
          <ul>
            <li>
              <Link className="p-color" href="/">
                /inicio
              </Link>
            </li>
            <li>
              <Link className="p-color" href="/commands">
                /comandos
              </Link>
            </li>
            <li>
              <Link
                className="p-color"
                href=""
                target="_blank"
              >
                /codigo-fonte
              </Link>
            </li>
          </ul>
        </nav>
      </navbar>
    </div>
  );
};

export default Navbar;
