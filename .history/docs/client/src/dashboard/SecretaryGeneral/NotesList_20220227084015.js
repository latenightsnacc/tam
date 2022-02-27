import React, {useState, useEffect} from "react";
import NoteDataService from "../../services/note.service";
import {Link} from "react-router-dom";
import Button from "../../components/Button";
import BreadCrumbs from "../../components/BreadCrumbs";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Spacer from "../../components/Spacer";

import Layout from "../../components/Layout";


import PageTitle from "../../components/PageTitle";

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
        setCurrentIndex(-1)
    }

    const tagColor = {
        green: 'bg-green-100',
        yellow: 'bg-yellow-100'
    };

    return(
        <>
            <Navbar />
            <Spacer />
            <Layout>
                <Container>
                <BreadCrumbs
                memberDashboard={'member'}
                dashboardLabel={'Member Dashboard'}
                excoDashboard={'secretarygeneral'}
                excoDashboardLabel={'Secretary General Dashboard'} 
                displayLevel2={'hidden'}
                excoFinalPage={"notes"}
                excoFinalPageLabel={"Notes"}
                activeTextColor2={'text-green-500'} 
                />
                <Spacer />
                <div className="flex flex-row h-full items-center justify-between">
                    <PageTitle title={"Notes"} />
                    <Link to={"/dashboard/secretarygeneral/new"}>
                        <Button label="new" icon={`far fa-plus`} />
                    </Link>
                    
                </div>
                    
                </Container>
                {results.map((record, key) => {
                return (
                    <div key={key}
                        className={"hover:cursor-pointer"} 
                        onClick={() => {navigate(`../dashboard/secretarygeneral/notes/${record.id}`)}}>
                        <MinuteSummary 
                            tag={record.type}
                            tagColor={record.type === "meeting" ? tagColor.green : tagColor.yellow}
                            date={record.date}
                            text={(record.minutes).length > 300 ? (record.minutes).substring(0, 300) + '...' : record.minutes}
                        />
                    </div>
                    
                );
            })}
            </Layout>
            
           
            
            <Footer />
        </>
    )

}

export default NotesList;