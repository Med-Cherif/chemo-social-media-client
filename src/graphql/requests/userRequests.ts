import { gql } from "@apollo/client";
import AUTH_RESPONSE_FRAGMENT from "../fragments/authResponseFragment";

const userRequests = {
  login: gql`
    ${AUTH_RESPONSE_FRAGMENT}
    mutation Login($data: LoginInput) {
      login(data: $data) {
        ...AuthResponse
      }
    }
  `,
  register: gql`
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
