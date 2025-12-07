import { Router, Request, Response } from 'express';
import {IBorrowBook, BorrowBook } from '../modoles/BorrowBook';
import { BorrowBookService } from '../services/BorrowBookService';
const borrowbookservice = new BorrowBookService();
export const BORROWBOOK = Router();
let borrowBooks=[];

BORROWBOOK.post("/borrowBooks/add", async (req, res) => { 
    try {
        const { userId, bookId, borrowDate } = req.body;

        if (!userId || !bookId) {
            return res.status(400).json({ error: "userId and bookId are required" });
        }

        const borrowBook1 = {
            userId,
            bookId,
            borrowDate: borrowDate ? new Date(borrowDate) : undefined
        };

        await borrowbookservice.addBorrowBook(borrowBook1);

        res.json({ message: "BorrowBook added successfully" });
    } catch (error: any) {
        res.status(409).json({ error: error.message });
    }
});
BORROWBOOK.get("/borrowBooks", async (req, res) => {
  const userId = req.body.userId as string;
  try {
    const borrowBooks = await borrowbookservice.getBorrowByUserId(userId);
    res.json(borrowBooks);
    } catch (error: any) {
    res.status(409).json({ error: error.message });
    }});