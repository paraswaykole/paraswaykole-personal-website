import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container">
        <div>
          <img
            alt="paras waykole"
            src="paras-waykole.jpg"
            className="avatar"
            height="100"
            width="100"
          />
        </div>

        <div>
          <h1 className="site-title">
            <Link href="/" title="Paras Waykole" rel="home">
              <a>Paras Waykole</a>
            </Link>
          </h1>
        </div>

        <nav role="navigation" className="main-navigation">
          <div className="menu-menu-1-container">
            <ul className="menu">
              <li className="main-navigation-item">
                <Link href="/" title="Paras Waykole" rel="home">
                  <a>About</a>
                </Link>
              </li>
              <li className="main-navigation-item">
                <Link href="/photos" title="Photos" rel="home">
                  <a>Photos</a>
                </Link>
              </li>
              <li className="main-navigation-item">
                <a href="https://twitter.com/ParasWaykole">Twitter</a>
              </li>
              <li className="main-navigation-item">
                <a href="https://www.linkedin.com/in/paras-waykole/">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
