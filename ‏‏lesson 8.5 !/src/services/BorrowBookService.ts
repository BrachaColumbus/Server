import { IBorrowBook ,BorrowBook} from "../modoles/BorrowBook";
import { User } from "../modoles/User";
import { Book } from "../modoles/Book";


export class BorrowBookService {
    async addBorrowBook(borrowBook: IBorrowBook): Promise<IBorrowBook> {
        const existingBorrow = await BorrowBook.findOne({ _id: borrowBook._id });
        if (existingBorrow) {
            throw new Error("Borrow record already exists");
        }
        const newBorrowBook = new BorrowBook(borrowBook);
        return newBorrowBook.save();
    }

    async getBorrowByUserId(userId: string) {
        const borrows = await BorrowBook.find({ userId })
            .populate({ path: 'userId', select: 'name _id' }) // מוסיף את שם המשתמש
            .populate({ path: 'bookId', select: '_title _id' }) // מוסיף את שם הספר
            .exec();

        return borrows;
    }

}
