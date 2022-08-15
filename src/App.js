import { gql } from "@apollo/client";
import Layout from "./components/Layout";
import Router from "./router";

function App() {
  // const { loading, error, data } = useQuery(GET_LOCATIONS);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <Layout>
      <Router />
    </Layout>
  );
  // return <div className="App">{data.user.name + " - " + data.user.email}</div>;
}

export default App;
