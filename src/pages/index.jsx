import React from 'react';
import { graphql } from 'gatsby';

const index = ({ data }) => {
  return (
    <>
      <h1>{data.index.h1Title}</h1>
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
