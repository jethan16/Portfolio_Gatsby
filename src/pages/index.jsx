/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import React from 'react';
import { graphql, Link } from 'gatsby';
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import facepaint from 'facepaint';
import Layout from '../components/layout';
import '../styles/global.css';

// Media Queries //

const breakpoints = [576, 768, 992, 1200];

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

//

const Section = styled.section`
  padding: 75px 50px;
`;

const index = ({ data }) => {
  return (
    <Layout>
      <Section
        className="hero-block"
        // css={{
        //   display: 'flex',
        //   flexDirection: 'column',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        // }}
      >
        <h1 className="titles">{data.hero.heroTitle}</h1>
        <h1 className="titles">{data.hero.heroSubtitle}</h1>
        {/* <button css={{ marginRight: '25px' }}>Get To Know Me</button> */}
        <div
          css={{
            marginTop: '15px',
          }}
        >
          <a
            className="social-link"
            href="https://www.facebook.com/ethan.jones.376/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} style={{ color: '#4267B2' }} />
          </a>

          <a
            className="social-link"
            href="https://www.instagram.com/ethan.nel.jones/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{
                color: '#c32aa3',
              }}
            />
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/ethan-jones-54342288/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#0072b1' }} />
          </a>
          <a
            className="social-link"
            href="https://www.github.com/jethan16/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithubAlt} style={{ color: '#654329' }} />
          </a>
        </div>
        <FontAwesomeIcon icon={faChevronDown} />
        <svg
          className="curved-border"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 100"
        >
          <path
            d=" m 0 15 Q 400 150 800 15 L 800 100 L 0 100 L 0 100Z "
            fill="#293132"
          />
        </svg>
      </Section>
      <Section css={{ background: '#293132' }}>
        <h1
          css={{
            textAlign: 'center',
            fontSize: '20px',
            color: 'whitesmoke',
          }}
        >
          About
        </h1>
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query HeroQuery {
    hero: contentfulHero {
      heroTitle
      heroSubtitle
    }
  }
`;

export default index;
