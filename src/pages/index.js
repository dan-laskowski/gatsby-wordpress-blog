import * as React from 'react';
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import { Container, Stack, Box, Heading, Text, Link } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import MainPost from '../components/MainPost';

const MainArticles = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.2fr 0.6fr;
  grid-template-rows: 160px 160px;
  gap: 4px 4px;
  grid-template-areas:
    'PostZero PostOne PostTwo'
    'PostZero PostOne PostThree';
  max-width: 1200px;
  height: 300px;
  margin: 0 auto;
`;

const HomePage = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost {
        nodes {
          id
          excerpt
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
  console.log(allWpPost);
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
        <MainArticles>
          <MainPost post="PostZero" number={0} />
          <MainPost post="PostOne" number={1} />
          <MainPost post="PostTwo" number={2} />
          <MainPost post="PostThree" number={3} />
        </MainArticles>
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
