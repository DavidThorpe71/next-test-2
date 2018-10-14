import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
// import { endpoint } from "../config";
// import { LOCAL_STATE_QUERY } from "../components/Cart";

function createClient({ headers }) {
  return new ApolloClient({
    uri: "http://localhost:4000/graphql",
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    }
  });
}

export default withApollo(createClient);
