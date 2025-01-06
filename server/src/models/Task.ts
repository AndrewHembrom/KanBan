import mongoose, { Document, Schema, Model } from 'mongoose';
import { IColumn } from './Column';

// Interface for Task
export interface ITask extends Document {
  column: IColumn['_id'];
  title: string;
  description?: string;
  position: number;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Schema for Task
const taskSchema: Schema<ITask> = new Schema({
  column: { type: Schema.Types.ObjectId, ref: 'Column', required: true },
  title: { type: String, required: true },
  description: { type: String },
  position: { type: Number, required: true },
  dueDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Model for Task
const Task: Model<ITask> = mongoose.model<ITask>('Task', taskSchema);

export default Task;
