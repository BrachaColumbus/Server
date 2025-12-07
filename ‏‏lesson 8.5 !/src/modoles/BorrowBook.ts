import mongoose, { Document, Schema, Types } from 'mongoose';
export interface IBorrowBook {
    _id?: Types.ObjectId;
    userId: string;
    bookId: Types.ObjectId;
    borrowDate:  Date | undefined;
}
export const borrowBookSchema = new Schema<IBorrowBook>({
    userId: { type: String, required: true, ref: 'User' },
    bookId:     { type: Schema.Types.ObjectId, required: true, ref: 'Book' },
    borrowDate: { type: Date, default: Date.now },
});

export const BorrowBook = mongoose.model<IBorrowBook>('BorrowBook', borrowBookSchema);