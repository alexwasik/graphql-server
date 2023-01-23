import { Book } from '../types';
import books from '../lib/dataset';

const allBooks = () => books;
const getBook = (_obj: any, {id}: {id: string}): Book | undefined => {
  const findBook = books.find((book: Book) => book.id === id);
  return findBook
};

export { allBooks, getBook };
