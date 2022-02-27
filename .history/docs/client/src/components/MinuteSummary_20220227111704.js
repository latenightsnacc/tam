const MinuteSummary = (props) => {
    return(
        <div className="container my-4">
            <div className="min-w-sm shadow rounded p-2 mt-3 text-xs md:text-sm text-gray-800">
                <div className="flex justify-between my-1 items-center">
                    <span className={`rounded py-2  px-2 font-medium capitalize ${props.tagColor} text-gray-800`}>{props.tag}</span>
                    <span className="text-gray-500 text-xs">{props.date}</span>
                </div>
                <p className="py-2 text-gray-700 leading-7">{props.text}</p> 
                <div className="flex flex-row">
                    <span className="text-green-500 text-xs">Deborah Egonu</span>
                </div>       
            </div>
        </div>
    )
}

export default MinuteSummary;