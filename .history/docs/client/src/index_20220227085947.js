import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';
import SecretaryGeneral from './dashboard/SecretaryGeneral';
import AddNote from './dashboard/SecretaryGeneral/AddNote';
import NotesList from './dashboard/SecretaryGeneral/NotesList';
import Note from './dashboard/SecretaryGeneral/Note';
import Treasurer from './dashboard/Treasurer';
import President from './dashboard/President';
import Coordinator from './dashboard/Coordinator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/dashboard/member' element={<App />} />
        <Route path='/dashboard/secretarygeneral' element={<SecretaryGeneral />} />
        <Route path='/dashboard/secretarygeneral' element={<SecretaryGeneral />} />
        <Route path='/dashboard/secretarygeneral' element={<SecretaryGeneral />} />
        <Route path='/dashboard/secretarygeneral' element={<SecretaryGeneral />} />
        <Route path='/dashboard/treasurer' element={<Treasurer />} />
        <Route path='/dashboard/president' element={<President />} />
        <Route path='/dashboard/coordinator' element={<Coordinator />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
