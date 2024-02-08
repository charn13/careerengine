import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://careerengine.in/wp-content/uploads/2023/02/logo.png"
              alt=""
              className='p-4'
            />
          </div>
          <div className="col-md-4">
            <h2 className='p-4'>Use Links</h2>
          </div>
          <div className="col-md-4">
            <h2 className='p-4'>Get Contact Us</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="col-md-12">
              <p>We’re always in search for talented and motivated people. Don’t be shy introduce yourself!</p>
              <div>
              <span>
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>

                  
                </a>
              </span>
              <span>
                <a href="#" className="social-icon">
                  <i className="fab fa-youtube"></i>
                </a>
              </span>
              <span>
                <a href="#" className="social-icon text-dark ">
                  <i className="fab fa-linkedin"></i>
                </a>
              </span>

              </div>
            </div>
         
          </div>
          <div className="col-md-4 text-light">
            <ul className="list-unstyled">
              <li>
                <a href="https://careerengine.in/webdesign/" className="listFooter text-decoration-none text-dark fw-normal ">
                <span><i aria-hidden="true" className="fas fa-dot-circle"></i></span> Learn Full Stack Development
                </a>
              </li>
              <li className='pt-2 '>
                <a href="https://careerengine.in/mobile-app-developement/" className="text-decoration-none fw-normal  text-dark">
                  <span><i aria-hidden="true" className="fas fa-dot-circle"></i></span> Flutter App Development
                </a>
              </li>
              <li className='pt-2'>
                <a href="https://careerengine.in/graphicdesigncourse/" className="text-decoration-none text-dark fw-normal ">
                <span><i aria-hidden="true" className="fas fa-dot-circle"></i></span>
                   Graphic & Motion Design
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 footer-links-list ">
            <ul className="list-unstyled ">
              <li className='pt-2 text-dark'>
                <span className='p-1'><i aria-hidden="true" class="fas fa-phone-square-alt"></i></span><a href="tell:+90416-19321" className="text-decoration-none fw-normal text-dark">
                  90416-19321
                </a>
              </li>
              <li className='pt-2 text-dark'>
                <a href="mailto:Info@careerengine.in" className="text-decoration-none pt-1 text-dark fw-normal ">
                 <span className='p-1'><i aria-hidden="true" class="fas fa-envelope"></i></span> Info@careerengine.in
                </a>
              </li>
              
              <li className='pt-2 container'>
                 <div className="row">
                  <span className="col-md-1">
                  <span className='pr-2 '><i aria-hidden="true" className="fas fa-location-arrow  fs-2 mt-1.5"></i></span>
                  </span>
                  <span className='col-md-11 fw-normal '>Near Maan Chonwk, Chak Road, Sri Muktsar Sahib (152026), Punjab,India </span> 
                 </div>
                </li>
            </ul>
          </div>
        </div>
        <div className="row text-center p-5 ">
          <p>
            Copyright © 2024 All Rights Reserved. Made with Love by{' '}
            <a href="https://jdwebservices.com/" className="text-decoration-none text-dark">
              <strong>JD Web Services</strong>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
