function Navbaar() {
    return (
        // <>
            <div className="w-[100%] bg-blue-500 text-white flex justify-between items-center p-4 mx-auto h-1 text-xs sm:grid-cols-12">
                <h1 className="text-l font-bold bg-blue-600 p-[8px] ml-[-15px] ">Dashboard</h1>
                <span className="p-[15px] text-xs">Business Date: 29-02-2020</span>
                <div className="flex justify-between gap-4 list-none">
                    <li><i className="fa-solid fa-bell"></i></li>
                    <li><i className="fa-solid fa-right-from-bracket"></i></li>
                </div>
            </div>

        // </>
    )
}
export default Navbaar;