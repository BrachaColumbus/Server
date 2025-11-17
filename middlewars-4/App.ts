import express from "express";
import bodyParser from "body-parser";
import { managerRouter } from "./router/ManagerRouter";
import { gamerRouter } from "./router/GamerRouter";
import { ErrorHandler } from "./middlewares/ErrorHandler";

const app = express();

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


//  ראוטרים 
app.use("/manager", managerRouter);
app.use("/gamer", gamerRouter);

//מידלוואר לתפיסת שגיאות
app.use(ErrorHandler);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
