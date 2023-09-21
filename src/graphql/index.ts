import { GraphQLClient } from "graphql-request";
import { END_POINT } from "../config";

const graphqlQLClient = new GraphQLClient(END_POINT, {
  headers: () => ({
    authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQ5NGU2ZDM4YWM4OTJiMWJmM2Y5ZGYiLCJpYXQiOjE2OTIzMTU3NDR9.9E8CBVVMCzPdtfvqRhmIpqGrmQRNgPKujbWdlN-C69g"}`,
  }),
});

export default graphqlQLClient;
