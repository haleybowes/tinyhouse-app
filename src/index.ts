import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app, path: '/api' })
app.use(express.json());
const port = 9000;

app.listen(port);

console.log(`[app]: http://localhost:${port}`);
