
import { Router, Request, Response } from 'express';
import { Book } from '../modoles/Book';
import { BookService } from '../services/BookService';
const bookService = new BookService();

export const BOOK = Router();
console.log("BOOK ROUTER LOADED");

let books=[];
BOOK.post("/books/add", (req, res) => {
    bookService.addBook(req.body) 
    .then(() => {
      res.json({ message: "Book added successfully" });
    }).catch((error:any) => {
      console.error(error); 
      res.status(400).json({ error: error.message }); 
    });
});
BOOK.get("/books", async (req, res) => {
  try {
    const books = await bookService.getallBooks();
    res.json(books);
  }
    catch (error: any) {
    res.status(409).json({ error: error.message });
  }});
