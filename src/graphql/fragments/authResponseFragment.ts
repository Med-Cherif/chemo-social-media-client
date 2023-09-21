const AUTH_RESPONSE_FRAGMENT = `#graphql
    fragment AuthResponse on AuthSuccessResponse {
        accessToken
        user {
            _id
            email
            name
            username
            gender
        }
    }
`;

export default AUTH_RESPONSE_FRAGMENT;
