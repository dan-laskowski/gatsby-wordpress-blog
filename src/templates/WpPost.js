import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Disqus } from 'gatsby-plugin-disqus';
import { Container, Heading, Link, Text } from '@chakra-ui/react';
import { Link as GatsbyLink, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const WpPost = ({ data: { wpPost } }) => {
  return (
    <>
      <Helmet>
        <meta name="description" content={wpPost?.seo?.metaDesc} />
      </Helmet>
      <Container maxW="xl" centerContent>
        <Heading as={`h1`} m={4}>
          {wpPost.title}
        </Heading>
        <Text mt={4} mb={10}>
          {ReactHtmlParser(wpPost.content)}
        </Text>
        <Link as={GatsbyLink} to="/">{`<< Back to Blog`}</Link>
        <Disqus
          config={{
            url: wpPost.uri,
            identifier: wpPost.id,
            title: wpPost.title,
          }}
        />
      </Container>
    </>
  );
};

export default WpPost;

export const query = graphql`
  query PostById($id: String) {
    wpPost(id: { eq: $id }) {
      id
      uri
      title
      content
      seo {
        metaDesc
      }
    }
  }
`;
