import { Iuser } from '../modoles/User';
import { User } from '../modoles/User';


export class UserService {
       async addUser(user: Iuser): Promise<Iuser> {
        const existingUser = await User.findOne({ _id: user._id });
        if (existingUser) {
            throw new Error("User already exists");
        }
        const newUser = new User(user);
        return newUser.save();
    }

    getallUsers(): Promise<Iuser[]> {
        return User.find().exec();
    }
}