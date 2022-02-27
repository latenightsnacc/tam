import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NoteDataService from "../../services/note.service";
import Navbar from "../../components/Navbar";
import BreadCrumbs from "../../components/BreadCrumbs";
import Spacer from "../../components/Spacer";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import Container from "../../components/Container";
import Layout from "../../components/Layout";

const Note = props => {
    const id = useParams()
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
    
    const [currentNote, setCurrentNote] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        getNote(id);
    }, [id]);

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
            setMessage("Note was updated successfully!");
        })
        .catch(e => {
            console.log(e);
        })
    }
    console.log(currentNote);
    return(
        <>
        <Navbar />
            <Spacer />
            <Layout>
                <BreadCrumbs
                    memberDashboard={'member'}
                    dashboardLabel={'Member Dashboard'}
                    displayLevel1={'inline-block'}
                    excoDashboard={'secretarygeneral'}
                    excoDashboardLabel={'Secretary General Dashboard'} 
                    displayLevel2={'inline-block'}
                    excoPage={"notes"}
                    excoPageLabel={"Notes"}
                    displayLevel3={'inline-block'}
                    excoFinalPage={"recordattendance"}
                    excoFinalPageLabel={"New Note"}
                    activeTextColor1={''}
                    activeTextColor2={'text-green-500'} 
                    />  
                <Spacer />
                <PageTitle title={"Note"} />
                <Spacer />
          
            <Container>
              <div className="flex flex-col items-center justify-center">
               { currentNote ? ( 
                <div className="w-full">
                  <form className="bg-white sm:shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        {/* AUTHOR AND CDS */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            {/* AUTHOR */}
                            <div className="mb-4">
                                <div className={`relative group py-2 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400`}>
                                    <div className="absolute -top-3">
                                        <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="author">
                                            Author
                                        </label>
                                    </div>
                                    <input 
                                        type={'text'}
                                        name={'author'}
                                        value={currentNote.author}
                                        className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                                        onChange={handleInputChange}
                                        required />   
                                </div>
                                
                            </div>
                            {/* CDS GROUP */}
                            <div className="mb-4">
                                <div className="relative group py-2 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                                    <div className="absolute -top-3">
                                        <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="cdsGroup">
                                            C.D.S Group
                                        </label>
                                    </div>
                                    <input 
                                        type={'text'}
                                        name={'cdsGroup'}
                                        value={currentNote.cdsGroup}
                                        className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                                        onChange={handleInputChange}
                                        required />  
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between mb-4">
                            <div className="flex flex-col md:flex-row md:items-center">
                                {/* TYPE OF EVENT */}
                                <div className="mb-4 md:mr-4">
                                    <div className={`relative group py-2 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400`}>
                                        <div className="absolute -top-3">
                                            <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="type">
                                                For
                                            </label>
                                        </div>
                                        <div className="flex flex-row items-center py-2  px-3">
                                            <div className="flex flex-row items-center mr-4">
                                                <input 
                                                type={'radio'}
                                                name={'type'}
                                                value={"Meeting"}
                                                className={'border-1 rounded ring-0 focus:outline-0 focus:ring-0 checked:text-green-400'}
                                                onChange={handleInputChange}
                                                
                                                required />
                                                <label className="ml-2 text-xs md:text-sm text-gray-700" for={"Meeting"}>Meeting </label>
                                            </div>
                                            <div className="flex flex-row items-center">
                                                <input 
                                                type={'radio'}
                                                name={'type'}
                                                value={'Event'}
                                                className={'border-1 rounded ring-0 focus:outline-0 focus:ring-0 checked:text-green-400'}
                                                onChange={handleInputChange}
                                                
                                                required />
                                                <label className="ml-2 text-xs md:text-sm text-gray-700" for={"Event"}>Event</label>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                    <div className="msg my-2">
                                        <p className="text-red-500 text-xs italic"></p>
                                    </div>
                                </div>
                                {/* DATE */}
                                <div className="mb-4">
                                <div className={`relative group py-2 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400`}>
                                    <div className="absolute -top-3">
                                        <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="date">
                                            Date
                                        </label>
                                    </div>
                                    <input 
                                    type={'date'}
                                    name={'date'}
                                    value={currentNote.date}
                                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                                    onChange={handleInputChange}
                                    required />
                                </div>
                                <div className="msg my-2">
                                    <p className="text-red-500 text-xs italic"></p>
                                </div>
                                </div>
                            </div>
                            {/* TIME */}
                            <div className="md:mr-4">
                                <div className={`relative group py-2 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400`}>
                                    <div className="absolute -top-3">
                                        <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="firstname">
                                            Time
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center py-2 px-1">
                                        <div className="flex flex-row items-center mr-4">
                                            <label className="mr-2 text-xs text-gray-700" for={"startTime"}>Start </label>
    
                                            <input 
                                            type={'time'}
                                            name={'startTime'}
                                            value={currentNote.startTime}
                                            className={'border-1 rounded ring-0 focus:outline-0 focus:ring-0 checked:text-green-400'}
                                            onChange={handleInputChange}
                                            
                                            required />
                                        </div>
                                        <div className="flex flex-row items-center">
                                            <label className="mr-2 text-xs text-gray-700" for={"endTime"}>End</label>
                                            <input 
                                            type={'time'}
                                            name={'endTime'}
                                            value={currentNote.endTime}
                                            className={'border-1 rounded ring-0 focus:outline-0 focus:ring-0 checked:text-green-400'}
                                            onChange={handleInputChange}
                                            required />
                                        </div>
                                    </div>
                                </div>
                                <div className="msg my-2">
                                    <p className="text-red-500 text-xs italic"></p>
                                </div>
                            </div>
                        </div>
                        {/* VENUE */}
                        <div className="mb-8">
                            <div className={`relative group py-2 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400`}>
                                <div className="absolute -top-3">
                                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="firstname">
                                        Venue
                                    </label>
                                </div>
                                <input 
                                type={'text'}
                                name={'venue'}
                                value={currentNote.venue}
                                className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                                placeholder={'NYSC Secretariat off Abakaliki Road'}
                                onChange={handleInputChange}
                                required />
                            </div>
                            <div className="msg my-2">
                                <p className="text-red-500 text-xs italic"></p>
                            </div>
                    
                        </div>
                        {/* TOPIC */}
                        <div className={`mb-8`}>
                            <div className="relative group py-2 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                            <div className="absolute -top-3">
                            <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="surname">
                                Topic
                            </label>
                            </div>
                            <input 
                            type={'text'}
                            name={'topic'}
                            value={currentNote.topic}
                            className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                            placeholder={'Impacts of ICT in our daily lives.'}
                            onChange={handleInputChange}
                            required />
                            <div className="msg mt-2 hidden">
                            <p className="text-red-500 text-xs italic"></p>
                            </div>
                            </div>
                        </div>
                        {/* MINUTES */}
                        <div className="my-8">
                            <div className="relative group py-2 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                                <div className="absolute -top-3">
                                <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="batch">
                                    Minutes
                                </label>
                                </div>
                                <textarea 
                                name={'minutes'}
                                value={currentNote.minutes}
                                className={'border-0 text-xs md:text-sm w-full text-gray-700 h-96 py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 normal-case'}
                                placeholder={'Start typing here...'}
                                onChange={handleInputChange}
                                required>
                                    </textarea>
                                <div className="msg mt-2 hidden">
                                <p className="text-red-500 text-xs italic">Please enter your password.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-col">
                            <button 
                            onClick={updateNote}
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Update Note
                            </button>
                        </div>
                  </form>
                  <Footer />
                  </div>
               ) : null}
              </div>
            
            </Container>
          </Layout>
          
        </>
      )
}

export default Note;