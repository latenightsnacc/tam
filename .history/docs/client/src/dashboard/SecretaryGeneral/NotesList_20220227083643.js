import React, {useState, useEffect} from "react";
import NoteDataService from "../../services/note.service";
import {Link} from "react-router-dom";
import { response } from "express";

const NotesList = () => {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    
    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        NoteDataService.getAll()
        .then(response => {
            setNotes(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        })
    }
    
    const refreshList = () => {
        getNotes();
        setCurrentNote(null);
        setCurrentIndex
    }
}

export default NotesList;