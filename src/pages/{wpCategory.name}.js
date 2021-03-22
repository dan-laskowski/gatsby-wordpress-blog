import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Container, Stack, Box, Heading, Text, Link } from '@chakra-ui/react';
import { Link as GatsbyLink, graphql } from 'gatsby';

export const CategoryPostTemplate = ({ data }) => {
  console.log(data.allWpPost.nodes.length);
  return (
    <Container maxW="xl" centerContent>
      <Heading as={`h1`} m={5}>
        {!data.allWpPost.nodes.length
          ? `Brak postów w tej kategorii`
          : data.allWpPost.nodes[0].categories.nodes[0].name}
      </Heading>
      <Stack spacing={8}>
        {data.allWpPost.nodes.map(({ id, title, excerpt, uri }) => (
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
  );
};

export const query = graphql`
  query($name: String!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { name: { eq: $name } } } } }
    ) {
      nodes {
        id
        title
        uri
        excerpt
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;
export default CategoryPostTemplate;
