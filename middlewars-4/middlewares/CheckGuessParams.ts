import { Request, Response, NextFunction } from "express";
import { GameService } from "../service/GameService"; 
import { game } from "../service/GameService";

export function CheckGuessParams(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { number } = req.body;

    if (number === undefined) {
        return res.status(400).json({ message: "Missing number parameter" });
    }

    const numValue = Number(number);

    if (isNaN(numValue)) {
        return res.status(401).json({ message: "The guess must be a number" });
    }
    
    req.body.number = numValue;


    if (numValue < game.min || numValue > game.max) {
        return res.status(402).json({
            message: `The number must be between ${game.min} and ${game.max}`
        });
    }

    next();
}