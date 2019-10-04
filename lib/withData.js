import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint, prodEndPoint } from '../config';
import { onError } from 'apollo-link-error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (networkError) {
    // Check if error response is JSON
    try {
      JSON.parse(networkError.bodyText);
    } catch (e) {
      // If not replace parsing error message with real one
      networkError.message = networkError.bodyText;
    }
  }
});

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndPoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
    //local data
    clientState: {
      resolvers: {},
      defaults: {
        cartOpen: false,
      },
    },
  });
}

export default withApollo(createClient);
