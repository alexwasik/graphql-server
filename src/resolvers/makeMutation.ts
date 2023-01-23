import books from '../lib/dataset'
import { Book } from '../types'

const makeMutation = () => {
  return {
    addBook: (_obj: any, { author, title }: {author: string, title: string}): Book => {
      const id = String(books.length + 1)
      const newBook = { id, author, title }
      books.push(newBook)
      return newBook
    },
    removeBook: (_obj: any, { id }: {id: string}): Book | undefined => {
      const findBook = books.find((book: Book) => book.id === id)
      if (findBook) {
        const index = books.indexOf(findBook)
        books.splice(index, 1)
      }
      return findBook
    }
  }
}

export default makeMutation
