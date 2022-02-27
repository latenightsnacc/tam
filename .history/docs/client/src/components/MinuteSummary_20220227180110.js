const MinuteSummary = (props) => {
    const setDate = (date) => {
        const d = new Date(date);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        return(`${da} ${mo} ${ye}`);
    }
    
    
    return(
        <div className="container my-4">
            <div className="min-w-sm shadow-sm rounded p-2 mt-3 text-xs md:text-sm text-gray-800 hover:shadow-2xl">
                <div className="flex justify-between my-1 items-center">
                    
                    
                </div>
                <div className="flex text-gray-500 flex-row mt-3 mb-2 items-center">
                <span className={`rounded   px-2 mr-3  tracking-wide  capitalize text-green-500 uppercase`}>{props.tag}</span>
                    <span className="text-xs"><span className="text-gray-300 mr-1"><i class="fa-solid fa-user"></i></span>Deborah Egonu</span>
                    <span className=" text-xs ml-3"><span className="text-gray-300 mr-1"><i class="fa-solid fa-calendar-day"></i></span>{setDate(props.date)}</span>
                </div>
                <p className="text-gray-700 leading-7 tracking-wide"><span ><i class="fa-solid fa-clock"></i></span> {props.text}</p> 
                       
            </div>
        </div>
    )
}

export default MinuteSummary;