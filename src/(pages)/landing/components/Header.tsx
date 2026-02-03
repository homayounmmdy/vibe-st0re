"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../components/Logo";

interface NavItemType {
  name: string;
  query: string;
}

const NavItems: NavItemType[] = [
  { name: "Games", query: "games" },
  { name: "Apps", query: "apps" },
];

const LandingHeader: React.FC = () => {
  const location = useLocation();
  // But based on your Hero, you use `?games` and `?apps` → so we check the *presence* of the param
  const activeTab = location.search.includes("?games")
    ? "games"
    : location.search.includes("?apps")
      ? "apps"
      : "games"; // default to games

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-2xl">
      <div className="flex items-center justify-between bg-gray-900/30 backdrop-blur-md border border-gray-700/40 rounded-full px-4 py-2.5 text-sm">
        {/* Logo */}
        <div className="flex items-center">
          <Logo /> {/* Assuming your Logo accepts a size prop; adjust if needed */}
        </div>

        {/* Navigation */}
        <nav className="flex gap-1">
          {NavItems.map((item) => (
            <Link
              key={item.query}
              to={`/?${item.query}`}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeTab === item.query
                  ? "text-white bg-purple-600/20"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default LandingHeader;