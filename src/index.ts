import dotenv from 'dotenv';

dotenv.config();

import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql';
import { connectDatabase } from './database'; 
import { resolvers } from './graphql/resolvers';


const mount = async (app: Application) => {
    const db = await connectDatabase();
    const server = new ApolloServer({ typeDefs, resolvers, context: () => ({ db }) });
    server.applyMiddleware({ app, path: '/api' })
    app.use(express.json());
    app.listen(process.env.PORT);

    console.log(`[app]: http://localhost:${process.env.PORT}`);

    // const listings = await db.listings.find({}).toArray();
    // console.log(listings);
}

mount(express());