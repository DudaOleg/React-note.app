import axios from 'axios';

const axiosInstance = axios.create({baseURL: 'http://localhost:5000'});

const getAllNote = () => axiosInstance.get('/notes');
const getAllArchiveNote = () => axiosInstance.get('/notes/archive');
const createNote = data => axiosInstance.post('/notes', data);
const createArchiveNote = data => axiosInstance.post('/notes/archive', data);
const updateNote = (id, data) => axiosInstance.patch(`/notes/${id}`, data);
const deleteNote = (id) => axiosInstance.delete(`/notes/${id}`);
const deleteArchiveNote = (id) => axiosInstance.delete(`/notes/archive/${id}`);


export { createNote, updateNote, deleteNote, getAllNote, createArchiveNote, deleteArchiveNote, getAllArchiveNote }
