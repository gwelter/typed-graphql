# Graphql

This proejct showcases 2 ways of approaching a GraphQL API, Schema First and Code first. Both approaches uses appolo-server.

### Schema First

The schema first approach is the most common approach to GraphQL. It is the approach that is used by the [Apollo Server](https://www.apollographql.com/docs/apollo-server/).
Implemented on the file `schema-first.ts` we have the schema specified insede it

### Code First

The code first approach is a more flexible approach to GraphQL. It is the approach that is used by [NestJS](https://docs.nestjs.com/graphql/quick-start).
Implemented on the folder `src` we have the schema autogenerated from the code resulting in a file `schema.gql` that is used by the server.
We can achieve this by using the [Reflect Metadata](https://www.npmjs.com/package/reflect-metadata) library alogsinde with [TypeGraphQL](https://typegraphql.com/) `buildSchema` method.