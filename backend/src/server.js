import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import notesRoutes from './routes/notesRoutes.js';

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json()); // This middleware will parese JSON bodies: req.body
app.use(
	cors({
		origin: 'http://localhost:5173', // Allow requests from this origin
	}),
);
app.use(rateLimiter);
// Our simple custom middleware
// app.use((req, res, next) => {
// 	console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
// 	next();
// });

app.use('/api/notes', notesRoutes);

connectDB().then(() => {
	app.listen(5001, () => {
		console.log('Server Started on PORT:', PORT);
	});
});
