import mongoose from 'mongoose'

export const connectDB = async (): Promise<void> => {
    try {
        if (!process.env.DB) {
            throw new Error("Databse Connection string not defined");
        }

        await mongoose.connect(process.env.DB);
        console.log("Database connected");
    } catch (e) {
        console.error("Databse connection failed", e);
    }
}