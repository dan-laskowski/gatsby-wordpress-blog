import * as React from 'react';
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby';
import ReactHtmlParser from 'react-html-parser';
import { Container, Stack, Box, Heading, Text, Link } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost {
        nodes {
          id
          excerpt
          title
          uri
        }
      }
    }
  `);
  const { allWpPost } = data;
  return (
    <>
      <Helmet>
        <html lang="pl" />
        <title>Gatsby Wordpress Blog</title>
      </Helmet>
      <Container maxW="xl" centerContent>
        <Heading as={`h1`} m={5}>
          Gatsby Wordpress Blog
        </Heading>
        <Stack spacing={8}>
          {allWpPost.nodes.map(({ id, title, excerpt, uri }) => (
            <Box key={id} p={5} shadow="md" borderWidth="1px">
              <Heading as={`h2`}>{title}</Heading>
              <Text mt={4}>{ReactHtmlParser(excerpt)}</Text>
              <Link as={GatsbyLink} to={uri}>
                Read more
              </Link>
            </Box>
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default HomePage;
