import { GameService } from "../service/GameService";
import express from "express";
import { Request, Response, NextFunction } from "express";
import { ChecktheToken } from "../middlewares/Checkpermissions";
import { game } from "../service/GameService";
import { CheckGuessParams } from "../middlewares/CheckGuessParams";
export const managerRouter = express.Router();
import jwt from "jsonwebtoken";
const secret = "secretkey";



managerRouter.post("/login", (req, res, next) => {
    try {
        const { name, password } = req.body;
        if (name === game.name && password === game.password) {
            const token = jwt.sign(
                { 
                    name: name,
                    status: "manager"
                },    
                secret, 
                { expiresIn: "1h" } 
            );

            return res.json({
                message: "Login successful",
                token: token
            });
        }

        return res.status(408).json({ message: "No approval" });
    } catch (err) {
        next(err);
    }
});

managerRouter.post("/setminandmax", ChecktheToken, (req, res, next) => {
    try {
        const { min, max } = req.body;
        game.getminandmax(min, max);
        res.json({
            message: "min and max updated",
            min: game.min,
            max: game.max
        });
    } catch (err) {
        next(err);
    }
});

managerRouter.post("/setwinnumber", ChecktheToken,CheckGuessParams,(req, res, next) => {
    try {
        const { winnumber } = req.body;
        const newWinNumber = Number(winnumber);
        game.winnumber = newWinNumber;
        res.json({
            message: "the win number updated",
            winnumber: game.winnumber
        });
    } catch (err) {
        next(err);
    }
});

managerRouter.get("/seewinnumber",ChecktheToken, (req, res, next) => {
    try {
        return res.json({
            winningNumber: game.winnumber
        });
        
    } catch (err) {
        next(err);
    }
});


