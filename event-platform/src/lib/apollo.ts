import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ogdrof003901yw7hct1wd4/master',
  cache: new InMemoryCache()
})