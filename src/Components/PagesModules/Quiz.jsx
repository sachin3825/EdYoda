import React from "react";
import "./Quiz.css";
import date from "../../assets/calendar.svg";
import time from "../../assets/clock-blue.svg";

function Quiz() {
  return (
    <div className='Quiz-container'>
      <div className='Quiz-container-title'>
        <h1 className='title'>Quiz-1: Data Types</h1>
        <p className='grey-text'>16 December 2021, Thursday</p>
      </div>
      <div className='quiz-details-container'>
        <h2>Quiz Details</h2>
        <div className='quiz-details'>
          <div className='quiz-details-left'>
            <div className='left-infi'>
              <p className='text-bold'>10</p>
              <p className='grey-text'>Questions</p>
            </div>
            <div className='left-infi'>
              <p className='text-bold'>-</p>
              <p className='grey-text'>Duration</p>
            </div>
            <div className='left-infi'>
              <p className='text-bold'>125</p>
              <p className='grey-text'>Total Score</p>
            </div>
          </div>
          <div className='quiz-details-middle'></div>
          <div className='quiz-details-right'>
            <div>
              <p>Start</p>
              <div className='schedule'>
                <div className='schedule-date'>
                  <img src={date} alt='' />
                  <p>16 Dec 2021</p>
                </div>
                <div className='schedule-time'>
                  <img src={time} alt='' />
                  <p>07:30 PM</p>
                </div>
              </div>
            </div>
            <div>
              <p>Due</p>
              <div className='schedule'>
                <div className='schedule-date'>
                  <img src={date} alt='' />
                  <p>19 Dec 2021</p>
                </div>
                <div className='schedule-time'>
                  <img src={time} alt='' />
                  <p>11:59 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
