/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { client } from "./lib/apollo";

import "./assets/css/font-faces.css";
import "./assets/css/variables.css";
import "./assets/css/index.css";
import App from "./App";

import { ApolloProvider } from "@merged/solid-apollo";

render(
  () => (
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  ),
  document.getElementById("root") as HTMLElement
);
