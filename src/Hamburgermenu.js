import React from "react";

const Hamburgermenu = () => {
  return (
    <>
      <div className="lines-wrap">
        <div className="lines-inner">
          <div className="lines"></div>
        </div>
      </div>

      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <nav className="site-nav dark mb-5 site-navbar-target">
        <div className="container">
          <div className="site-navigation">
            <a href="index.html" className="logo m-0">
              Shuttleflicks Photography<span className="text-primary">.</span>
            </a>

            <ul className="js-clone-nav d-none d-lg-inline-none site-menu float-right site-nav-wrap">
              <li>
                <a href="#home-section" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="has-children">
                <a href="#about-section" className="nav-link">
                  Portfolio
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="shuttleflicks.html" className="nav-link">
                      Shuttleflicks
                    </a>
                  </li>
                  <li>
                    <a href="jasonphotography.html" className="nav-link">
                      Jason Photography
                    </a>
                  </li>
                  <li>
                    <a href="loveandcophotography.html" className="nav-link">
                      Love & Wedding Photography
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#services-section" className="nav-link">
                  Services
                </a>
              </li>

              <li>
                <a href="#contact-section" className="nav-link">
                  Contact us
                </a>
              </li>
            </ul>

            <a
              href="#"
              className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-inline-block"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Hamburgermenu;
