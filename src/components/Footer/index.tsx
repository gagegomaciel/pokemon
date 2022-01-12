export const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <img
                src="https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg"
                alt="Logo"
              />
            </svg>
          </a>
          <span className="text-muted">&copy; 2022 Pokémon</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="http://localhost:3000/home">
              <svg className="bi" width="24" height="24">
                <use href="https://t.ctcdn.com.br/uoFbikmqs4uzBJty4J99HwX-InM=/400x400/smart/i489929.jpeg" />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
