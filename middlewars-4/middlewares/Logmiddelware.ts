import fs from "fs";
import path from "path";
import { Request, Response, NextFunction } from "express";


function getLogFileName() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const logsDir = path.join(__dirname, "../logs");

    if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir);

    return path.join(logsDir, `logs_${year}_${month}.txt`);
}

export function logMiddleware  
    (req: Request,
    res: Response,
    next: NextFunction) {
    const logMessage = `[${new Date().toISOString()}] URL: ${req.method} ${req.url}`;
    console.log(logMessage);

    const logFile = getLogFileName();
    fs.appendFileSync(logFile, logMessage + "\n");

    next();
}

export function logGame(message: string) {
    const logMessage = `[${new Date().toISOString()}] ${message}`;
    console.log(logMessage);

    const logFile = getLogFileName();
    fs.appendFileSync(logFile, logMessage + "\n");
}
