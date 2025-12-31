import express from 'express';

const app = express();

// Endpoint
app.get('/api/notes', (req, res) => {
	res.status(200).send('You got 20 notes.');
});

// Endpoint
app.post('/api/notes', (req, res) => {
	res.status(201).send('Post created Successfully.');
});

// Endpoint
app.put('/api/notes/:id', (req, res) => {
	res.status(200).send('Note updated Successfully.');
});

// Endpoint
app.delete('/api/notes/:id', (req, res) => {
	res.status(200).send('Note deleted successfully.');
});

app.listen(5001, () => {
	console.log('Server Started on PORT: 5001');
});
