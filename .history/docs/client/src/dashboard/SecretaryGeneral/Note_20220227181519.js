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
        .then()
    }
}