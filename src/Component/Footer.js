import React from 'react';
import {
  GitHub,
  YouTube,
  WhatsApp,
  LinkedIn,
  Email,
  Instagram,
} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import '../Assests/Css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="flex-container">
        <div className="flex-item">
          <p className="category">ABOUT</p>
          <div className="content-about">
            <p>At Venetto Design we believe in style, in quality and in the beauty of our products. Each Venetto Design item is a unique project, built on history, research, development, and, just like a work of art, on originality.</p>
          </div>
        </div>
        <div className="flex-item">
          <p className="category">COMMUNITY</p>
          <div className="content">
            <p>Blog</p>
            <p>Community</p>
            <p>Ideas</p>
            <p>Developers</p>
          </div>
        </div>
        <div className="flex-item">
          <p className="category">COMPANY</p>
          <div className="content">
            <p>About us</p>
            <p>Team</p>
            <p>Media</p>
            <p>Affiliates</p>
            <p>Contacts & Imprint</p>
          </div>
        </div>
        <div className="flex-item">
          <p className="category">NEWS LETTER</p>
          <div className="content-foot">
            <p>Sign up to our newsletter to receive exclusive offers.</p>
            <input type="email" className='input' placeholder='E-mail' />
           <br></br>
           <br></br>
            <button type="submit" className='submit-btn'>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="icons-footer">
        <div className="icon-container">
          <IconButton color="inherit" href="https://github.com/" target="_blank">
            <GitHub />
          </IconButton>
          <IconButton color="inherit" href="https://www.youtube.com/" target="_blank">
            <YouTube />
          </IconButton>
          <IconButton color="inherit" href="https://wa.me/1234567890" target="_blank">
            <WhatsApp />
          </IconButton>
          <IconButton color="inherit" href="https://www.linkedin.com/" target="_blank">
            <LinkedIn />
          </IconButton>
          <IconButton color="inherit" href="mailto:your.email@gmail.com">
            <Email />
          </IconButton>
          <IconButton color="inherit" href="https://www.instagram.com/" target="_blank">
            <Instagram />
          </IconButton>
        </div>
        <p className="category">Copyright © 2023 HomeDecor, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;

