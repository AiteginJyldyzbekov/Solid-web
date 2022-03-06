import React, { createRef, useState, useEffect } from "react";
import { NavLink } from "../NavLink/NavLink";
import AsidePaths from "../../constants/AsidePaths";
import firebase from "../../../config/firebase.js";

export default function DashboardAside({isActiveNav: active, setActiveNav}) {
  const links = createRef();
  const [index, setIndex] = useState(null);
  
  const open = () => {
    setActiveNav(!active)
    window.localStorage.setItem("active", JSON.stringify(!active));
  };
  
  const logout = () => {
    firebase.auth().signOut();
  };

  useEffect(() => {
    const elements = [...links.current.children];
    elements.forEach((item, index) => {
      if (item.classList.length) {
        if (item.classList[1] === "active") {
          setIndex(index);
        }
      }
    });
  }, [links]);

  useEffect(() => {
    if (index) {
      const elements = [...links.current.children];
      elements.forEach((item, i) => {
        if (i === index + 1) {
          links.current.children[i].classList.remove("prev", "next");
          links.current.children[index + 1].classList.add("next");
        } else if (i === index - 1) {
          links.current.children[i].classList.remove("prev", "next");
          links.current.children[index - 1].classList.add("prev");
        } else {
          links.current.children[i].classList.remove("prev", "next");
        }
      });
    }
  }, [index, links]);
  return (
    <div className={"aside-wrapper " + (active || "BurgerActive")}>
      <div className="aside-title">
        <img src="/images/Solid.png" />
        <span className={active ? "aside-title-active" : ""}>
          {active ? "Solid Academy" : ""}
        </span>
        <div className="dashboard-burger-menu" onClick={open}>
          <svg
            className={"ham hamRotate ham4 " + (active ? " active" : "")}
            viewBox="0 0 100 100"
            width="50"
          >
            <path
              className="line top"
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            ></path>
            <path className="line middle" d="m 70,50 h -40"></path>
            <path
              className="line bottom"
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            ></path>
          </svg>
        </div>
      </div>
      <ul ref={links}>
        <li className="aside-li aside-li-first"></li>
        {AsidePaths.map((props) => (
          <NavLink key={props.title} className={"aside-li "} {...props}>
            {props.icon || <img src={props.path} alt={props.title} />}
            <span className={active ? "aside-title-active" : ""}>
              {active ? props.title : ""}
            </span>
          </NavLink>
        ))}
        <li className="aside-li">
          {/* <Link href="/"> */}
            <div onClick={logout}>
              <img src="/images/logout.png" alt="Logout" />
              <span className={active ? "aside-title-active" : ""}>Logout</span>
            </div>
          {/* </Link> */}
        </li>
      </ul>
    </div>
  );
}
