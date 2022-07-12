import { ApolloProvider, gql, useQuery } from "@apollo/client"
import { client } from "./lib/apollo"
import { Router } from "./components/Routes"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  )
}

export default App
