import { IResolvers } from '@graphql-tools/utils';
import makeQuery from '../resolvers/makeQuery';
import makeMutation from '../resolvers/makeMutation';

export const makeResolvers = (): IResolvers => {
  const resolvers = {
    Query: makeQuery(),
    Mutation: makeMutation(),
  };
  return resolvers;
}
