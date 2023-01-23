import express from "express"
import { graphqlHTTP } from "express-graphql"
import { makeExecutableSchema } from "@graphql-tools/schema"
import { readFileSync } from 'fs'
import path from 'path'
import { TypeSource } from '@graphql-tools/utils'
import { makeResolvers } from './lib/makeResolvers'

const app = express()
const typeDefs: TypeSource = readFileSync(path.join(__dirname, '../schema.graphql'), 'utf8')
const resolvers = makeResolvers()
const graphqlSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: resolvers,
  graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
