import React, { useRef } from "react";
import CardImage from 'C:/Backup-Hanuraag/Projects/blogapp/src/images/Passport_Photo.JPG';
import '../styles/Contact.css'

const Contact = () => {
  const githubLink = 'https://github.com/HanuraagBaskaran';
  const linkedinLink = 'https://www.linkedin.com/in/hanuraag-baskaran-407ab21ab/';
  const emailLink = 'mailto:rbhanuraag01@gmail.com';



  return (
    <div className="container mt-5">
        <div class="row">
    <div class="col-md-4">
      <a href={githubLink} class="card card-link custom-card" target="_blank">
        <div class="card-body">
          <h5 class="card-title">GitHub</h5>
        </div>
      </a>
    </div>
    <div class="col-md-4">
      <a href={linkedinLink} class="card card-link custom-card" target="_blank">
        <div class="card-body">
          <h5 class="card-title">LinkedIn</h5>
        </div>
      </a>
    </div>
    <div class="col-md-4">
      <a href={emailLink} class="card card-link custom-card" target="_blank">
        <div class="card-body">
          <h5 class="card-title">Gmail</h5>
        </div>
      </a>
    </div>
  </div>
  <div class="card mx-auto" style={{marginTop:'20px'}}>
    <img src={CardImage} class="card-img-top rounded-circle" alt="Card Image" style={{width:"195px", height:'250px', margin:'0 auto'}}/>
    <div class="card-body" style={{margin:'0 auto'}}>
        <h5 class="card-title">Hanuraag Baskaran</h5>
        <h6 class="card-subtitle mb-2 text-muted">Software Developer</h6>
        <ul class="list-unstyled">
        <li><i class="bi bi-telephone-fill me-1"></i>Phone: +91 99800 69849</li>
        <li><i class="bi bi-envelope-fill me-1"></i>Email: rbhanuraag01@gmail.com</li>
        </ul>
    </div>
</div>

</div>

  );
};

export default Contact;
