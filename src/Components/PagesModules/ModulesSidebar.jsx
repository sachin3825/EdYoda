import React from "react";
import "./ModuleSidebar.css";

import { NavLink } from "react-router-dom";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { Outlet } from "react-router-dom";

function ModulesSidebar() {
  const menuItem = [
    {
      Path: "/modules/PythonLoops",
      name: "Python Loops",
      icon: <AiOutlinePlayCircle />,
    },
    {
      Path: "/modules/Quiz",
      name: "Quiz-1: Data Types",
      icon: <BsQuestionCircle />,
    },
    {
      Path: "/modules/Assignment",
      name: "Assignment - 1 Operators  | Loops",
      icon: <BsCodeSlash />,
    },
  ];
  return (
    <div className='Module-container'>
      <div className='Module-sidebar'>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.Path}
            key={index}
            className='Module-link'
            activeClassName='Module-active'
          >
            <div className='Module-icon'>{item.icon}</div>
            <div className='Module-link_text'>{item.name}</div>
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default ModulesSidebar;
