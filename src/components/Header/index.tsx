import { Logo } from "./styles";

interface IHeaderProps {
  home: string;
  company: string;
  contact: string;
}

export const Header = ({ home, company, contact }: IHeaderProps) => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <Logo
              src="https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg"
              alt="Logo"
              className="rounded mx-auto d-block"
            />
          </a>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a
                href="http://localhost:3000/home"
                className="nav-link px-2 text-white"
              >
                {home}
              </a>
            </li>
            <li>
              <a
                href="http://localhost:3000/home"
                className="nav-link px-2 text-white"
              >
                {company}
              </a>
            </li>
            <li>
              <a
                href="http://localhost:3000/home"
                className="nav-link px-2 text-white"
              >
                {contact}
              </a>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
