import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import "../styles/Projects.css";

const Projects = () => {
  const [showSection1, setShowSection1] = useState(false);
  const [showSection2, setShowSection2] = useState(false);
  const [showSection3, setShowSection3] = useState(false);

  const handleSection1Toggle = () => {
    setShowSection1(!showSection1);
  };

  const handleSection2Toggle = () => {
    setShowSection2(!showSection2);
  };

  const handleSection3Toggle = () => {
    setShowSection3(!showSection3);
  };

  return (
    <div className="container mt-5">
      <div className="col-md-12 d-flex flex-column">
        <h1>Projects</h1>
        <h3>
          These are projects I have implemented during my college years, either for coursework or on my personal time
        </h3>
        <div className="project card mb-3" style={{borderStyle:'none'}}>
          <div className="project-item">
            <div
              className={`dropdown-title ${showSection1 ? "active" : ""}`}
              onClick={handleSection1Toggle}
              style={{fontSize:'30px',fontWeight:'bold'}}
            >
              Breast Cancer Classification
            </div>
            <Collapse in={showSection1}>
              <div id="section1">
                <p style={{fontSize:'20px'}}>Functional Requirements: To detect whether a breast cancer tumor is malignant or benign using machine learning models<br/>Tools Used: sklearn, ML tools, contains all the requisite libraries to train, test and validate models</p>
              </div>
            </Collapse>
          </div>
          <div className="project-item">
            <div
              className={`dropdown-title ${showSection2 ? "active" : ""}`}
              onClick={handleSection2Toggle}
              style={{fontSize:'30px', fontWeight:'bold'}}
            >
              IPL Database Management
            </div>
            <Collapse in={showSection2}>
              <div id="section2">
              <p style={{fontSize:'20px'}}>Functional Requirements: Store statistics for an IPL season in a database, Web based frontend to perform CRUD.<br/>Tools used: Flask for the GUI on the webpage, and SQL Server to store the data.</p>
              </div>
            </Collapse>
            <div className="project-item">
            <div
              className={`dropdown-title ${showSection3 ? "active" : ""}`}
              onClick={handleSection3Toggle}
              style={{fontSize:'30px', fontWeight:'bold'}}
            >
              Online Car Dealership
            </div>
            <Collapse in={showSection3}>
              <div id="section2">
              <p style={{fontSize:'20px'}}>Functional Requirements: Store statistics for an IPL season in a database, Web based frontend to perform CRUD.<br/>Tools used: Flask for the GUI on the webpage, and SQL Server to store the data.</p>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
