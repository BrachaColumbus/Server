import mongoose, { Document, Schema } from 'mongoose';

export interface Iuser {
  _id: string;        // זה יהיה מספר הת"ז
  name: string;
  birthDate: Date;
  age?: number;
}

export const userSchema = new Schema<Iuser>({
    _id:       { type: String, required: true },  // הת"ז
    name:      { type: String, required: true },
    birthDate: { type: Date, required: true },
});

userSchema.virtual('age').get(function() {
    const today = new Date();
    const birth = new Date(this.birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    if (today.getMonth() < birth.getMonth() || 
        (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
});

export const User = mongoose.model<Iuser>('User', userSchema);
