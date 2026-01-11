import mongoose from 'mongoose';

// 1- Create a Schema
// 2- Model based off of that schema

const noteSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
		},
	},
	{ timestamps: true } // createdAt, updatedAt
);

const Note = mongoose.model('Note', noteSchema);

export default Note;
