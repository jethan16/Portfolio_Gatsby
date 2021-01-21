import React from 'react';
import { jsx, css, Global } from '@emotion/react';
import styled from '@emotion/styled';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faFacebookF,
//   faGithubAlt,
//   faInstagram,
//   faLinkedinIn,
// } from '@fortawesome/free-brands-svg-icons';
import facepaint from 'facepaint';

// Media Queries //

const breakpoints = [576, 768, 992, 1200];

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

//

const Layout = ({ children }) => {
  return (
    <div>
      <Global
        styles={css`
          * {
            font-family: 'Rubik';
          }
          button:focus {
            outline: none;
          }
          button:active {
            box-shadow: inset 1px 1px rgba(0, 0, 0, 0.5);
            background: rgba(0, 0, 0, 0.05);
          }
        `}
      />
      {children}
    </div>
  );
};

export default Layout;
