import React, {useState, useEffect} from "react";
import NoteDataService from "../../services/note.service";
import {Link} from "react-router-dom";

const NotesList = () => {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    
    useEffect(() => {

    }, []);

    const 
}

export default NotesList;