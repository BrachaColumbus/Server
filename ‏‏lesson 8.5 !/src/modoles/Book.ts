import mongoose, { Document, Schema, Types } from 'mongoose';
export interface IBook {
    _id: Types.ObjectId;
    _title: string;
    _author: string;
}
export const bookSchema = new Schema<IBook>({
    _title:  { type: String , required: true },
    _author: { type: String, required: true },
});
export const Book = mongoose.model<IBook>('Book', bookSchema);