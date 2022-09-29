import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBg);
    return () => window.removeEventListener("scroll", changeBg);
  });

  return (
    <nav className={navbar ? "nav nav-bg" : "nav"}>
      <div className="container">
        <Link href="/">
          <img src="/images/header_logo.png" alt="logo" className="nav-logo" />
        </Link>
        <div className="nav-bar">
          <ul className="nav-list">
            <li className="nav-item btn--call">
              <a
                href="tel:+996705455466"
                className="nav-link btn btn-brighred animate-y "
              >
                Позвонить
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
