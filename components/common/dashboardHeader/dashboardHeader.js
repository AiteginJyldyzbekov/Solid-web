import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function DashboardHeader({isActiveNav: active}) {
  const { pathname } = useRouter();
  useEffect(() => {
    let body = document.body;
    if (pathname.includes("/admin")) {
      body.style.background = "white";
    } else {
      body.style.background = "#131b1f";
    }
  }, []);

  return (
    <div className={"dashboard-header-wrapper " + (active ? "active" : "")}>
      <div></div>
      <div className="dashboard-header-search-wrapper">
        <input
          className="dashboard-header-search"
          type="text"
          placeholder="Поиск"
        />
      </div>
      <Link href="#">
        <div className="dashboard-header-logo"></div>
      </Link>
    </div>
  );
}
