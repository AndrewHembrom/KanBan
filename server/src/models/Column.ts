import mongoose, {Schema, Document, Model} from "mongoose";
import { IBoard } from "./Board";

export interface IColumn extends Document {
    board: IBoard['_id'];
    name: string;
    position: number;
    createdAt: Date;
}

const columnSchema: Schema<IColumn> = new Schema({
    board: {
        type: mongoose.Types.ObjectId,
        ref: 'Board',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    position: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
})

const Column: Model<IColumn> = mongoose.model<IColumn>('Column', columnSchema);

export default Column;