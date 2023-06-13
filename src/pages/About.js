import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../styles/About.css";

const About = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="container mt-5" style={{ height: "80vh" }}>
      <div className="col-md-12 d-flex flex-column">
        <CSSTransition
          in={showContent}
          timeout={3000}
          classNames="fade"
          unmountOnExit
        >
          <h3 className="fade-header">About Me</h3>
        </CSSTransition>
        <CSSTransition
          in={showContent}
          timeout={5000}
          classNames="fade"
          unmountOnExit
        >
          <p>I'm Hanuraag Baskaran, a recent graduate from PES University with a degree in computer science. My academic foundation was established through my attendance at esteemed schools like Vidyashilp Academy and Royale Concorde International School.

Python programming and the development of computer vision models are my main interests. I am skilled at building computer vision models using ReactJS for the front end and Django for the back end. Additionally, I am fluent in five languages, which facilitates effective communication and collaboration within diverse teams.

I worked as a project intern at Automotive Robotics India Ltd, where I focused on computer vision-based defect detection in machine components. I utilized PyTorch and TensorFlow for machine learning, Labelimg for image annotation, Yolov5 for object detection, and other tools. The models I developed demonstrated high accuracy in identifying and categorizing defects. Additionally, I created the Weblink Tool, a web-based system, using Django and ReactJS. This tool enabled managers to assign access to specific websites or tools based on employees' roles and responsibilities.

At Capgemini, I contributed to the development of the frontend framework for a desking tool using VueJS. This tool streamlined the management of quotes, invoices, and orders for automotive parts. I ensured that the frontend pages were user-friendly, responsive, and aligned with branding guidelines.

During my college years, I worked on various projects, including breast cancer classification using sklearn to develop accurate machine learning models, IPL database management using Flask and SQL Server to create a web-based interface and database system for storing IPL statistics, and an online car dealership platform implemented using the MERN stack to allow customers to browse vehicle models and schedule test drives.

These experiences have enhanced my technical proficiency, teamwork, problem-solving, and project management skills.

With a strong educational background and relevant experience, I am confident in my ability to make a valuable contribution to the field of computer science while also continuing to develop professionally.</p>
        </CSSTransition>
      </div>
    </div>
  );
};

export default About;
