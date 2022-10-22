import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container">
        <div>
          <img
            alt="paras waykole"
            src="paras-waykole.png"
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
                <Link href="/photos.html" title="Photos" rel="home">
                  <a>Photos</a>
                </Link>
              </li>
              &nbsp;&nbsp;&nbsp;
              <li className="main-navigation-item">
                <SocialIcon
                  url="https://www.linkedin.com/in/paras-waykole/"
                  style={{ width: 20, height: 20 }}
                />
              </li>
              <li className="main-navigation-item">
                <SocialIcon
                  url="https://github.com/paraswaykole"
                  style={{ width: 20, height: 20 }}
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
