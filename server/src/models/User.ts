import mongoose, { Schema, Document, Model } from "mongoose";

// Define the interface for the User document
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// Define the schema with appropriate type annotations
const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

export const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
