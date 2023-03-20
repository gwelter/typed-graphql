import { randomUUID } from "node:crypto";
import { ApolloServer, gql } from "apollo-server";

type User = {
  id: string;
  name: string;
}

const users: User[] = [];

const typeDefs = gql`
  type User {
    id: String!
    name: String!
  }
  type Query {
    users: [User]!
  },
  type Mutation {
    createUser(name: String!): User!
  },
`;

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      users: () => users,
    },
    Mutation: {
      createUser: (_, { name }) => {
        const user = {
          id: randomUUID(),
          name
        }
        users.push(user);
        return user
      }
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
