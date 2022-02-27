import React, {useState} from "react";
import NoteDataService from "../../services/note.service";
import Navbar from "../../components/Navbar";
import BreadCrumbs from "../../components/BreadCrumbs";
import Spacer from "../../components/Spacer";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import Container from "../../components/Container";
import Layout from "../../components/Layout";

const NewNote = () => {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const [date, setDate] = useState({
        date_recorded: '',
        month: '',
        year: ''
    });
    const [topic, setTopic] = useState({
        display: 'hidden'
    });
    const [note, setNote] = useState({
        type: '',
        date:'',
        start: '',
        end: '',
        venue: '',
        topic: '',
        minutes: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const {name, value } = event.target;
        setNote({...note, [name]: value});
    }
    if(note.date) {
        let a = note.date;
        setDate({
            date_recorded:new Date(a).toLocaleDateString(),
            month: months[new Date(a).getMonth()],
            year: new Date(a).getFullYear()
        })
        
    }
    
    const addTopic = (e) =>{
      if(e.target.value === "Event"){
        setTopic({
          display: 'block'
        })
      } else {
        setTopic({
          display: 'hidden'
        })
      }
        
    }
    
    const createNote = (e) => {
        e.preventDefault();
        
        const data = {
            type: note.type,
            date: note.date,
            month: date.month,
            year: date.year,
            start: note.start,
            end: note.end,
            venue: note.venue,
            topic: note.topic,
            minutes: note.minutes
        } 
        try{
            NoteDataService.create(data).then(response => {
                setNote({
                    type: response.data.type,
                    date: response.data.date,
                    month: date.month,
                    year: date.year,
                    start: response.data.start,
                    end: response.data.end,
                    venue: response.data.venue,
                    topic: response.data.topic,
                    minutes: response.data.minutes
                });
                setSubmitted(true);
                console.log(data);
            }).catch(e => {
                console.log(e);
            })
            
        }catch(e){
            console.log(e);
        };

    }
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
            <PageTitle title={"New Note"} />
            <Spacer />
      
        <Container>
          <div className="flex flex-col items-center justify-center">
           { submitted ? 
           <div className="text-center my-3">
               <h2 className="text-green-500 font-meidum text-2xl tracking-widest">Profile created successfully!</h2>
           </div> : 
            <div className="w-full">
              <form className="bg-white sm:shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="flex flex-col md:flex-row md:justify-between mb-4">
                        <div className="flex flex-col md:flex-row">
                            <div className="mb-4 md:mr-4">
                                <div className={`relative group py-2 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400`}>
                                    <div className="absolute -top-3">
                                        <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="firstname">
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
                                            onClick={addTopic}
                                            required />
                                            <label className="ml-2 text-xs md:text-sm text-gray-700" for={"meeting"}>Meeting </label>
                                        </div>
                                        <div className="flex flex-row items-center">
                                            <input 
                                            type={'radio'}
                                            name={'type'}
                                            value={'Event'}
                                            className={'border-1 rounded ring-0 focus:outline-0 focus:ring-0 checked:text-green-400'}
                                            onChange={handleInputChange}
                                            onClick={addTopic}
                                            required />
                                            <label className="ml-2 text-xs md:text-sm text-gray-700" for={"meeting"}>Event</label>
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
                                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="firstname">
                                        Date
                                    </label>
                                </div>
                                <input 
                                type={'date'}
                                name={'date'}
                                value={note.date}
                                className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                                placeholder={'Deborah'}
                                onChange={handleInputChange}
                                required />
                            </div>
                            <div className="msg my-2">
                                <p className="text-red-500 text-xs italic"></p>
                            </div>
                            </div>
                        </div>
                        {/* TIME */}
                        <div className="mb-4 md:mr-4">
                                <div className={`relative group py-2 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400`}>
                                    <div className="absolute -top-3">
                                        <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="firstname">
                                            Time
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center py-2  px-3">
                                        <div className="flex flex-row items-center mr-4">
                                            <input 
                                            type={'time'}
                                            name={'startTime'}
                                            value={note.start}
                                            className={'border-1 rounded ring-0 focus:outline-0 focus:ring-0 checked:text-green-400'}
                                            onChange={handleInputChange}
                                            
                                            required />
                                            <label className="ml-2 text-xs md:text-sm text-gray-700" for={"startTime"}>Meeting </label>
                                        </div>
                                        <div className="flex flex-row items-center">
                                        <label className="mr-2 text-xs md:text-sm text-gray-700" for={"endTime"}>End</label>
                                            <input 
                                            type={'time'}
                                            name={'endTime'}
                                            value={note.end}
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
                    <div className="mb-4">
                    <div className={`relative group py-2 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400`}>
                        <div className="absolute -top-3">
                            <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="firstname">
                                First Name
                            </label>
                        </div>
                        <input 
                        type={'text'}
                        name={'firstname'}
                        value={''}
                        className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                        placeholder={'Deborah'}
                        onChange={handleInputChange}
                        required />
                    </div>
                  <div className="msg my-2">
                    <p className="text-red-500 text-xs italic"></p>
                  </div>
                
                    </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="surname">
                        Surname
                    </label>
                    </div>
                    <input 
                    type={'text'}
                    name={'surname'}
                    value={''}
                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                    placeholder={'Egonu'}
                    onChange={handleInputChange}
                    required />
                    <div className="msg mt-2 hidden">
                    <p className="text-red-500 text-xs italic"></p>
                    </div>
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="batch">
                        Batch
                    </label>
                    </div>
                    <input 
                    type={'text'}
                    name={'batch'}
                    value={''}
                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 uppercase'}
                    placeholder={'2021 A'}
                    onChange={handleInputChange}
                    required />
                    <div className="msg mt-2 hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                    </div>
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="statecode">
                        Statecode
                    </label>
                    </div>
                    <input 
                    type={'text'}
                    name={'statecode'}
                    value={''}
                    placeholder={'EN/21A/0324'}
                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 uppercase'}
                    onChange={handleInputChange}
                    required />
                    <div className="msg mt-2 hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                    </div>
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="C.D.S">
                        Community Development Service (CDS) Group
                    </label>
                    </div>
                    <select 
                    type={'text'}
                    name={'cdsGroup'}
                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={handleInputChange}
                    required >
                        <option>Select CDS Group</option>
                        <option value={'ICT'}>Information Communication Technology (ICT)</option>
                        <option value={'Band'}>Band</option>
                    </select>
                    <div className="msg mt-2 hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                    </div>
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="L.G.A">
                        Local Government Area (L.G.A)
                    </label>
                    </div>
                    <input 
                    type={'text'}
                    name={'lga'}
                    value={''}
                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                    placeholder={'Enugu North'}
                    onChange={handleInputChange}
                    required />
                    <div className="msg mt-2 hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                    </div>
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="P.P.A">
                        Place of Primary Assignment (P.P.A)
                    </label>
                    </div>
                    <input 
                    type={'text'}
                    name={'ppa'}
                    value={''}
                    placeholder={'Digital Dreams Ltd'}
                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={handleInputChange}
                    required />
                    <div className="msg mt-2 hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                    </div>
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="phone_no">
                        Phone Number (Whatsapp)
                    </label>
                    </div>
                    <input 
                    type={'text'}
                    name={'phoneNo'}
                    value={''}
                    placeholder={'0812XXXXX89'}
                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={handleInputChange}
                    required />
                    <div className="msg mt-2 hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                    </div>
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="email">
                        Email
                    </label>
                    </div>
                    <input 
                    type={'email'}
                    name={'email'}
                    value={''}
                    placeholder={'debs@example.com'}
                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={handleInputChange}
                    required />
                    <div className="msg mt-2 hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                    </div>
                </div>
                
                
                
                <div className="flex w-full flex-col">
                  <button 
                  onClick={createNote}
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                   Create Profile
                  </button>

                  <span className="inline-block mt-2 align-baseline font-bold text-xs text-green-500 hover:text-green-800 text-center">
                    Already have a profile? Login
                  </span>
                </div>
              </form>
              <Footer />
              </div>
            }
          </div>
        
        </Container>
      </Layout>
      
    </>
  )
}

export default NewNote;