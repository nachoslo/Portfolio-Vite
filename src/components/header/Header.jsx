import { useContext, useState } from "react";
import LangContext from "../../context/LangContext";
import ThemeBtn from "./ThemeBtn";
import LanguageBtn from "./LanguageBtn";

const Header = () => {
  const { lang, showMenu, setShowMenu, handleLanguage } =
    useContext(LangContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(null);

  return (
    <header id="header">
      <a href="#home" className="header-logo">
        Nacho<span>.</span>
      </a>
      <div className="header-content">
        <nav className={mobileNavOpen ? "is-open" : null}>
          <ul>
            <li>
              <a href="#home" onClick={() => setMobileNavOpen(false)}>
                {lang.header.home}
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMobileNavOpen(false)}>
                {lang.header.about}
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setMobileNavOpen(false)}>
                {lang.header.experience}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMobileNavOpen(false)}>
                {lang.header.contact}
              </a>
            </li>
          </ul>
          {/* MOBILE NAV CLOSER */}
          <div
            className="mobile-nav-closer"
            onClick={() => setMobileNavOpen(false)}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </div>
        </nav>
        <div className="header-btns">
          <div
            className="header-btn header-lang-btn"
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <LanguageBtn />
            {/* MENU LANG HIDDEN */}
            <div
              className={
                showMenu ? "menu-lang-container" : "menu-lang-container-hidden"
              }
            >
              <div className="menu-lang">
                <span onClick={handleLanguage}>
                  {lang.header.en}
                </span>
                <span onClick={handleLanguage}>
                  {lang.header.es}
                </span>
              </div>
            </div>
          </div>
          <ThemeBtn />
          {/* MOBILE NAV OPENER*/}
          <div
            className="mobile-nav-opener"
            onClick={() => setMobileNavOpen(true)}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
