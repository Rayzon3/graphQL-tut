const { ApolloServer, gql } = require("apollo-server");
const { bikes } = require("./data")

// Return Type
// 2 Type -> Scaler Type(int, string, boolean, float), Object Type (To return an object)
const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
  }

  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Int!
    onSale: Boolean!
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World!";
    },
    products: () => {
        return bikes
    }
  },
};

const app = new ApolloServer({
  typeDefs,
  resolvers,
});

app.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
