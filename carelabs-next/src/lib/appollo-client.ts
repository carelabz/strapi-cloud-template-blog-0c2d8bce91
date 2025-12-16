import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});

const client2 = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
