import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const cart = useSelector((state) => state.cart);
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header id="header" className="headroom">
        <div className="startp-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img src="/images/logo.png" alt="logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link
                      href="/"
                      onClick={toggleNavbar}
                      className={`nav-link ${currentPath == "/" && "active"}`}
                    >
                      Home
                    </Link>

                    {/* <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/" && "active"
                          }`}
                        >
                          IT Startup
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/it-startup-2/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/it-startup-2/" && "active"
                          }`}
                        >
                          IT Startup Two
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/iot/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/iot/" && "active"
                          }`}
                        >
                          IOT
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/hosting/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/hosting/" && "active"
                          }`}
                        >
                          Hosting
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/machine-learning/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/machine-learning/" && "active"
                          }`}
                        >
                          Machine Learning
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/machine-learning-2/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/machine-learning-2/" && "active"
                          }`}
                        >
                          Machine Learning 2
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/bigdata-analytics/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/bigdata-analytics/" && "active"
                          }`}
                        >
                          Bigdata Analytics
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/digital-agency/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/digital-agency/" && "active"
                          }`}
                        >
                          Digital Agency
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/digital-agency-portfolio/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/digital-agency-portfolio/" &&
                            "active"
                          }`}
                        >
                          Digital Agency Portfolio
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/pc-repair/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/pc-repair/" && "active"
                          }`}
                        >
                          PC Repair
                        </Link>
                      </li>
                    </ul> */}
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about-1/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/about-1/" && "active"
                      }`}
                    >
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/projects-2/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/projects-2/" && "active"
                      }`}
                    >
                      Portfolio
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link
                      href="/blog-1/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/blog-1/" && "active"
                      }`}
                    >
                      Blog <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/blog-1/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-1/" && "active"
                          }`}
                        >
                          Blog Grid
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-2/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-2/" && "active"
                          }`}
                        >
                          Blog Right Sidebar
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-3/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-3/" && "active"
                          }`}
                        >
                          Blog Grid 2
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-4/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-4/" && "active"
                          }`}
                        >
                          Blog Right Sidebar 2
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-5/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-5/" && "active"
                          }`}
                        >
                          Blog Grid 3
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-6/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-6/" && "active"
                          }`}
                        >
                          Blog Right Sidebar 3
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-details/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-details/" && "active"
                          }`}
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
