import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const secret = "secretkey"; 

export function ChecktheToken(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];

    if (!token) {
        return res.status(407).json({ message: "Missing token" });
    }

    try {
       
        const decoded = jwt.verify(token, secret);

        
        (req as any).user = decoded;

        
        if ((req as any).user.status !== "manager") {
            return res.status(403).json({ message: "You are not a manager." });
        }

        next(); 
    } catch (err) {
        return res.status(601).json({ message: "Invalid token" });
    }
}
