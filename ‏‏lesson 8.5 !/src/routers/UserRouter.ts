import { Router, Request, Response } from 'express';
import { User } from "../modoles/User";
import {UserService} from '../services/UserService';

export const USER = Router();
const usersevice = new UserService();

// הוספת משתמש
USER.post("/users/add", async (req, res) => {
  try {
    const { _id, name, birthDate } = req.body;

    if (!_id || !name || !birthDate) {
      return res.status(400).json({ error: "id, name, and birthDate are required" });
    }
    console.log("req.body:", req.body);


    const newUser = new User({
      _id: _id,  // הת"ז מגיע מהמשתמש
      name,
      birthDate: new Date(birthDate),
    });

    await newUser.save();

    res.status(201).json({ message: "User added successfully" });

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// קבלת כל המשתמשים
USER.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await usersevice.getallUsers();  
    res.status(200).json(users);                    
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});
