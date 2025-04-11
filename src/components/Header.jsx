
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/resume", label: "Resume" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex items-center justify-center gap-2 md:gap-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path}>
                {({ isActive }) => (
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="transition-all duration-300"
                  >
                    {item.label}
                  </Button>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
