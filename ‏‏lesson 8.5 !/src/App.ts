import express, { Request, Response }  from 'express';
import {myDB} from './DB';
import { USER } from "./routers/UserRouter";
import { BOOK } from "./routers/BookRouter";
import { BORROWBOOK } from "./routers/BorrowBookRouter";

const app = express();
app.use(express.json());

myDB.getDB();

app.use(USER);
app.use(BOOK);
app.use(BORROWBOOK);

app.use((err: Error, req: Request , res: Response, next: any) => {
    res.status(500).send(err);
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


export default app;
