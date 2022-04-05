import mongoose from 'mongoose';

const Task = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    completed: {type: Boolean, required: true}
});

export default mongoose.model('Task', Task);