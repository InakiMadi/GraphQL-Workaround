const { GraphQLServer } = require('graphql-yoga');

// Example: query called 'get', argument called 'attr'. Query can't be null.
const typeDefs = `
  type Query {
    get(attr: String): String!
  }
`;

const resolvers = {
  Query: {
    get: (_, {
      attr
    }) => {
        if(attr == undefined) return `Empty attribute.`
        else return `Got ${attr}.`
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log('Server is running on localhost:4000'));