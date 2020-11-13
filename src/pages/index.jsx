/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import React from 'react';
import { graphql } from 'gatsby';
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

const index = ({ data }) => {
  const Button = styled.button`
    color: red;
  `;

  return (
    <>
      <h1
        css={css`
          color: red;
          &hover: blue;
        `}
      >
        {data.index.h1Title}
      </h1>
      <Button>Test Button</Button>
    </>
  );
};

export const query = graphql`
  query MyQuery {
    index: contentfulIndexTitle {
      h1Title
    }
  }
`;

export default index;
