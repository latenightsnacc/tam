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
            <div className="relative min-w-sm shadow-sm rounded p-2 mt-3 text-xs md:text-sm text-gray-800 hover:shadow-2xl">
            <div className="absolute -top-2 left-5">
                <span className={`rounded py-2 ${props.tagColor}  px-2 mr-3  tracking-wide  capitalize shadow-sm uppercase`}>{props.tag}</span>
            </div>
            
                <div className="flex text-gray-500 font-medium px-2 flex-row mt-4 mb-2 items-center">
                
                    <span className="text-xs "><span className="text-gray-300 mr-1"><i class="fa-solid fa-user"></i></span>Deborah Egonu</span>
                    <span className=" text-xs ml-3"><span className="text-gray-300 mr-1"><i class="fa-solid fa-calendar-day"></i></span>{setDate(props.date)}</span>
                </div>
                <p className="text-gray-700 px-2 leading-7 tracking-wide"><span className="text-gray-300 text-xs mr-1"><i class="fa-solid fa-clock"></i></span>{props.text}</p> 
                       
            </div>
        </div>
    )
}

export default MinuteSummary;