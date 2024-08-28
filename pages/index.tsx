import { useQuery } from "@apollo/client";
import { initializeApollo } from "../lib/apollo";
import PageComponent from "./PageComponent";
import { GET_ROUTE_BY_PATH } from "../lib/query";

const Index = () => {
  const { data, loading, error } = useQuery(GET_ROUTE_BY_PATH, {
    variables: { path: "/repeat-prescriptions/collection" },
  });

  if (loading) return <p>Loading page...</p>;
  if (error) return <p>Error loading page: {error.message}</p>;

  return <PageComponent path="/repeat-prescriptions/collection" />;
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_ROUTE_BY_PATH,
    variables: { path: "/repeat-prescriptions/collection" },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;
