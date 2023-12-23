import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import theme from "./theme";
import store from "./store";
import {
  ApolloClient,
  HttpLink,
  concat,
  from,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { END_POINT } from "./config/index.ts";
import apolloClient from "./graphql/client.ts";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      staleTime: 0,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <QueryClientProvider client={client}>
          <Router>
            <ChakraProvider theme={theme}>
              <App />
            </ChakraProvider>
          </Router>
        </QueryClientProvider>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
