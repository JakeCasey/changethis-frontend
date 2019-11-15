import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Error from "./ErrorMessage";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./wrappers/User";

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

export default class SignoutButton extends Component {
  render() {
    return (
      <Mutation
        mutation={SIGN_OUT_MUTATION}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signout, { loading, error }) => {
          return (
            <button onClick={() => signout()}>
              Sign Out{" "}
              <svg
                className="w-8 h-8 ml-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-gray-600 fill-current"
                  d="M11 4h3a1 1 0 011 1v3a1 1 0 01-2 0V6h-2v12h2v-2a1 1 0 012 0v3a1 1 0 01-1 1h-3v1a1 1 0 01-1.27.96l-6.98-2A1 1 0 012 19V5a1 1 0 01.75-.97l6.98-2A1 1 0 0111 3v1z"
                ></path>
                <path
                  className="text-gray-400 fill-current"
                  d="M18.59 11l-1.3-1.3c-.94-.94.47-2.35 1.42-1.4l3 3a1 1 0 010 1.4l-3 3c-.95.95-2.36-.46-1.42-1.4l1.3-1.3H14a1 1 0 010-2h4.59z"
                ></path>
              </svg>
            </button>
          );
        }}
      </Mutation>
    );
  }
}
