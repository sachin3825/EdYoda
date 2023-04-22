import React from "react";
import Container from "../Components/UI components/Container";
import dataimage from "../assets/Data-Analysis.png";
import dataimage2 from "../assets/Data Wrangling.png";
import "./Home.css";
function Home() {
  return (
    <div>
      <h1>Upcoming Certifications</h1>
      <Container>
        <div className='left'>
          <div>
            <img src={dataimage} alt='' />
          </div>

          <div className='title-container'>
            <div className='grey-bg'>
              <p>cerrification </p>
              <p>|</p>
              <p className='right'>Attempts 1 </p>
            </div>

            <p className='title'>
              Data analysis <br /> certification
            </p>
            <div className='blue-bg'>
              <p>cerrification </p>
              <p>|</p>
              <p>Attempts 1 </p>
            </div>
          </div>
        </div>
        <div className='middle'>
          <p>Exam structure</p>
          <div className='round'>
            <p>Round 1</p>
            <p className='tests'>MCQs</p>
            <p className='tests'>Coding</p>
          </div>
          <div className='round'>
            <p>Round 1</p>
            <p className='tests'>project</p>
          </div>
        </div>
        <div className='right-button'>view exam details</div>
      </Container>
      <h1>Continue Learning</h1>
      <div className='countine-learning-container'>
        <Container>
          <div>
            <div className='countine-learning-title-container'>
              <img src={dataimage2} alt='' />
              <div>
                <p className='title-container-title'>
                  Data wrangling & <br /> visualization
                </p>
                <div className='instructor-container'>
                  <img src={dataimage2} alt='' />
                  <p>Test Instructor</p>
                </div>
              </div>
            </div>
            <div>
              <div className='result-count'>
                <p>Live Sessions</p>
                <div className='result-polls'>
                  <p>0/13</p>
                  <div></div>
                </div>
              </div>
              <div className='result-count'>
                <p>Assignment</p>
                <div className='result-polls'>
                  <p>0/13</p>
                  <div></div>
                </div>
              </div>
              <div className='result-count'>
                <p>MCQ Quiz</p>
                <div className='result-polls'>
                  <p>0/13</p>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className='countine-learning-right'>
            <div>
              <p>Today's plan</p>
              <p className='grey-text'>21 March 2022</p>
            </div>
            <div>
              <p>Data Transformation using Pandas - 3</p>
            </div>
            <div className='feedback'>
              <p className='grey-text'>Daily Feedback</p>
              <p className='blue-text'>opens at 7:30 PM</p>
            </div>
            <div>
              <button>Join live session</button>
              <p className='grey-text'>Begin at 07:30 PM</p>
            </div>
          </div>
        </Container>
        <Container>
          <div className='Progress-container'>
            <p className='title'>Progress overview</p>
            <div className='progress'>
              <p>0%</p>
              <p>overall grade</p>
            </div>
            <div className='progress'>
              <p>0%</p>
              <p>Attendce</p>
            </div>
            <p className='view-progress'> view Detailed progress</p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
