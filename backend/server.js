import express from 'express';

const app = express();

app.get('/api/notes', (req, res) => {
	// Send the notes
	res.send('you got 5 notes');
	res.send('you got 7 notes');
});

app.listen(5001, () => {
	console.log('Server Started on PORT: 5001');
});
