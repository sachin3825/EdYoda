import React, { useState } from "react";
import "./NavbarBlue.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

function NavbarBlue() {
  const Program = ["ECRD", "FSR22222", "DS261121", "DS031221"];
  const [dropdown, setDropdown] = useState(false);
  const [title, setTitle] = useState(Program[3]);

  function filterHandler(title) {
    setTitle(title);
  }

  return (
    <div className='Navbar-blue'>
      <div></div>
      <div className='Dropdown'>
        <p>{title}</p>
        <i
          onClick={() => {
            setDropdown(!dropdown);
          }}
        >
          {!dropdown ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
        </i>
        <p>Data Scientist program</p>
      </div>

      {/* Dropdown */}
      {dropdown && (
        <div className='Dropdown-Items'>
          <p>Select program</p>
          <div className='programs'>
            {Program.map((programs) => (
              <p
                onClick={() => filterHandler(programs)}
                className={` ${title !== programs ? "title" : "active"} `}
                key={programs}
              >
                {programs}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavbarBlue;
