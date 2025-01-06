import mongoose, {Schema, Document, Model} from "mongoose";
import { IUser } from "./User";

export interface IBoard extends Document {
    user: IUser['_id'];
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const boardSchema = new Schema<IBoard>({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
})

const Board: Model<IBoard> = mongoose.model<IBoard>('Board', boardSchema)

export default Board;