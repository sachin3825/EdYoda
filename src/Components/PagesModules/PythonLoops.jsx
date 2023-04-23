import React, { useState } from "react";
import "./PythonLoops.css";
import i from "../../assets/document.svg";
import cam from "../../assets/videocam.svg";
import play from "../../assets/play-circle.svg";
import topic from "../../assets/information-circle 1.svg";
function PythonLoops() {
  const data = [
    { image: topic, name: "Session Plan" },
    { image: play, name: "Pre-Watch videos" },
    { image: cam, name: "Session recording" },
    { image: i, name: "Reference" },
  ];
  const [dropdown, setDropdown] = useState(false);
  const [title, setTitle] = useState(data[1]);
  function filterHandler(title) {
    setTitle(title);
  }
  return (
    <div className='Python-container'>
      <div className='Python-container-title'>
        <h1>Python Loops</h1>
        <p className='grey-text'>15 December 2021, Wednesday 07:30PM</p>
      </div>
      <div className='Daily_feedback'>
        <h3>Daily FeedBack</h3>
      </div>
      <div className='session'>
        <nav>
          <ul>
            {data.map((data) => (
              <li
                onClick={() => filterHandler(data)}
                className={` ${title !== data ? "title" : "active"} `}
              >
                <div
                  className='li-items'
                  onClick={() => {
                    setDropdown(!dropdown);
                  }}
                >
                  <img src={data.image} alt='' width={"20px"} />
                  <p>{data.name}</p>
                </div>

                {dropdown && (
                  <div className='Dropdown-Items'>
                    <h3>Session plan</h3>
                    <p>Live Session is about to start.Please stay tuned</p>
                    <button>Join live Session</button>
                    <ol>
                      <li>Sorting</li>
                      <li>filtering</li>
                      <li>usage</li>
                    </ol>
                    <h4>Session details</h4>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default PythonLoops;
