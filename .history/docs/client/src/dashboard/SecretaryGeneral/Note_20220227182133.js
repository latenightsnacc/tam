import React, { useState, useEffect } from "react";
import NoteDataService from "../../services/note.service";

const Note = props => {
    const initialNoteState = {
        author:'',
        cdsGroup: '',
        type: '',
        date: '',
        month: '',
        year: '',
        startTime: '',
        endTime: '',
        venue: '',
        topic: '',
        minutes: '' 
    }

    const [currentNote, setCurrentNote] = useState(initialNoteState);
    const [message, setMessage] = useState("");

    const getNote = id => {
        NoteDataService.get(id)
        .then(response => {
            setCurrentNote(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        })
    }

    useEffect(() => {
        getNote(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = e => {
        const {name, value } = e.target;
        setCurrentNote({
            ...currentNote,
            [name]: value
        });
    }

    const updateNote = () => {
        NoteDataService.update(currentNote.id, currentNote)
        .then(response => {
            console.log(response.data);
            setMessage
        })
    }
}