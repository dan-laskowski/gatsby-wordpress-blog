import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Post = styled.div`
  position: relative;
  grid-area: ${({ post }) => post};
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  img {
    object-fit: cover;
    height: 100%;
    width: fit-content;
    transition: filter 0.2s;
  }
  h1 {
    position: absolute;
    left: 24px;
    bottom: 24px;
    z-index: 10;
  }
  :hover {
    img {
      filter: brightness(0.7);
    }
  }
`;

const MainPost = ({ post, number }) => {
  const data = useStaticQuery(graphql`
    {
      allWpPost {
        nodes {
          id
          title
          uri
          featuredImage {
            node {
              id
              srcSet
              altText
            }
          }
        }
      }
    }
  `);
  const { allWpPost } = data;
  return (
    <>
      <Post number={number} post={post}>
        <Link to={allWpPost.nodes[number].uri}>
          <h1>{allWpPost.nodes[number].title}</h1>
          <img
            srcSet={allWpPost.nodes[number].featuredImage.node.srcSet}
            alt={allWpPost.nodes[number].featuredImage.node.altText}
          />
        </Link>
      </Post>
    </>
  );
};

export default MainPost;
