import * as React from 'react';
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby';
import ReactHtmlParser from 'react-html-parser';
import { Container, Stack, Box, Heading, Text, Link } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

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
        <title>To mój blog</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Przykładowy blog stworzony z pomocą Gatsby.js z backendem Wordpress."
        />
      </Helmet>
      <Layout>
        <Container maxW="container.lg" centerContent>
          <Heading as={`h1`} m={5}>
            To mój blog
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
      </Layout>
    </>
  );
};

export default HomePage;
