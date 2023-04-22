import React, { useState } from "react";
import "./Sidebar.css";
import { FaBars } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { RiUserVoiceFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      Path: "/",
      name: "Home",
      icon: <FaHome />,
    },
    {
      Path: "/modules",
      name: "Modules",
      icon: <GiBookshelf />,
    },
    {
      Path: "/instructor",
      name: "Instructors",
      icon: <RiUserVoiceFill />,
    },
  ];
  return (
    <div className='container'>
      <div
        style={{
          width: isOpen ? "200px" : "70px",
          fontSize: isOpen ? "40px" : "20px",
        }}
        className='sidebar'
      >
        <div className='top_section'>
          <div style={{ marginLeft: isOpen ? "0px" : "0px" }} className='bars'>
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.Path}
            key={index}
            className='link'
            activeclassName='active'
          >
            <div className='icon'>{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className='link_text'
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
