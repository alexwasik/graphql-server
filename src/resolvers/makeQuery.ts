import { allBooks, getBook } from './getBooks';
import { Book } from '../types';

const makeQuery = () => {
  return {
      hello: () => 'Hello world!',
      getBook: (_obj: any, { id }: { id: string }): Book | undefined => {
        return getBook(_obj, { id });
      },
      allBooks: () => {
        return allBooks();
      },
  };
};

export default makeQuery;
