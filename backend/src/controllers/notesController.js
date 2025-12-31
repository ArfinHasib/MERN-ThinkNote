export function getAllNotes(req, res) {
	res.status(200).send('You just fetched the notes');
}

export function createNote(req, res) {
	res.status(201).send('Post created Successfully.');
}

export function updateNote(req, res) {
	res.status(200).send('Note updated Successfully.');
}

export function deleteNote(req, res) {
	res.status(200).send('Note deleted Successfully.');
}
