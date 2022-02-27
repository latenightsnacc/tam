const MinuteSummary = (props) => {
    return(
        <div className="container my-4">
            <div className="min-w-sm shadow-sm rounded p-2 mt-3 text-xs md:text-sm text-gray-800 hover:shadow-2xl">
                <div className="flex justify-between my-1 items-center">
                    <span className={`rounded py-2  px-2 font-medium tracking-wide shadow-sm capitalize ${props.tagColor} text-gray-800`}>{props.tag}</span>
                    <span className="text-gray-500 text-xs">{props.date}</span>
                </div>
                <div className="flex flex-row my-2">
                    <span className="text-green-500 text-xs"><span className="text-gray-300"><i class="fa-solid fa-user"></i></span> Deborah Egonu</span>
                </div>
                <p className="text-gray-700 leading-7">{props.text}</p> 
                       
            </div>
        </div>
    )
}

export default MinuteSummary;