"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between p-4">
      <nav className="md:hidden">
        <button
          className="p-2 rounded-md bg-gray-200 hover:bg-gray-300"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>
      <nav className={`md:flex ${isOpen ? "block" : "hidden"} mt-4 md:mt-0`}>
        <ul className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8">
          <li className="mr-4">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-4">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="mr-4">
            <Link href="/about">About</Link>
          </li>
          <li className="mr-4">
            <Link href="/language">Language</Link>
          </li>
        </ul>
      </nav>
      <div>
        <img
          src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=70"
          alt="Logo"
        ></img>
      </div>
    </header>
  );
};

export default Header;
