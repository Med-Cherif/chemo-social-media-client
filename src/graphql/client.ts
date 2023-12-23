import {
  ApolloClient,
  ApolloLink,
  concat,
  from,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { ACCESS_TOKEN_KEY, END_POINT } from "../config";
import { createUploadLink } from "apollo-upload-client";
import { getAccessToken } from "../hooks/tokenStorageHelpers";
const httpLink = new HttpLink({ uri: END_POINT });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: getAccessToken(),
    },
  }));

  return forward(operation);
});

const uploadLink = createUploadLink();

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authMiddleware, uploadLink, httpLink]),
  defaultOptions: {
    query: {},
  },
});

export default apolloClient;
