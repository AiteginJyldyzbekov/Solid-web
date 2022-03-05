import { useState, useEffect } from "react";
import Link from "next/link";
import {useRouter} from "next/router";


export default function DashboardHeaderAside({ active, isActive }) {
  return (
    <div className="dashboard-header-wrapper">
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
