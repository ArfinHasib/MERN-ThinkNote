import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

// Middleware
app.use(express.json()); // This middleware will parese JSON bodies: req.body

// Our simple custom middleware
// app.use((req, res, next) => {
// 	console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
// 	next();
// });

app.use('/api/notes', notesRoutes);

app.listen(5001, () => {
	console.log('Server Started on PORT:', PORT);
});
