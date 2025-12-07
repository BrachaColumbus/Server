import{ IBook,  Book } from '../modoles/Book';

export class BookService {
        async addBook(book: IBook): Promise<IBook> {
            const existingBook = await Book.findOne({
        _title: book._title,
        _author: book._author
    });

    if (existingBook) {
        throw new Error("Book already exists");
    }
        const newBook = new Book(book);
        return newBook.save();
    }

    getallBooks(): Promise<IBook[]> {
        return Book.find().exec();
    }
}
