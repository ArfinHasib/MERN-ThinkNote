import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NoteDetailPage from './pages/NoteDetailPage';
import toast from 'react-hot-toast';

const App = () => {
	return (
		<div>
			<button
				onClick={() => toast.error('This is not Awesome')}
				className="p-4 bg-red-500 text-white rounded-md left-0 top-3 my-2"
			>
				Click to Toast
			</button>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/create" element={<CreatePage />} />
				<Route path="/note/:id" element={<NoteDetailPage />} />
			</Routes>
		</div>
	);
};

export default App;
