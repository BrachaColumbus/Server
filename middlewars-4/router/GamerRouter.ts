import { GameService } from "../service/GameService";
import { CheckGuessParams } from "../middlewares/CheckGuessParams";
import { game } from "../service/GameService";
import express from "express";
export const gamerRouter = express.Router();

gamerRouter.get("/new", (req, res) => {
    game.randnum(); 
    res.json({
        message: "A new game has started!",
        min: game.min,
        max: game.max
    });
});

gamerRouter.post("/guess", CheckGuessParams, (req, res, next) => {
    try {
        
       const { number } = req.body;        
       const result = game.chekguess(number);       
        res.json({
            guess: number,
            result: result
        });
    } catch (err) {
        next(err); 
    }
});



