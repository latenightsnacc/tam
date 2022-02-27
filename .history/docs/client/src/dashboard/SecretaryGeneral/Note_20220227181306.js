import React, { useState, useEffect } from "react";
import NoteDataService from "../../services/note.service";

const Note = props => {
    cconst initialNoteState = {
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
}