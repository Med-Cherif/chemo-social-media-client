import { gql } from "graphql-request";
import AUTH_RESPONSE_FRAGMENT from "./fragments/authResponseFragment";

const userRequests = {
  login: `#graphql
        ${AUTH_RESPONSE_FRAGMENT}
        mutation Login($data: LoginInput) {
            login(data: $data) {
                ...AuthResponse
            }
        }
    `,
  register: `#graphql
        ${AUTH_RESPONSE_FRAGMENT}
        mutation Register($data: RegisterInput) {
            register(data: $data) {
                accessToken
                ...AuthResponse
            }
        }
    `,
};

export default userRequests;
