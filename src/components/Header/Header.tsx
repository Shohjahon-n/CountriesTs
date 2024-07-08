import { useNavigate } from "react-router-dom"

export const Header = () => {
    const navigate = useNavigate()

    const logOut = () => {
        localStorage.setItem('auth', 'false')
        navigate('/login')
    }
    return (
        <header className="header w-full h-20 bg-secondary flex shadow-inner shadow-[#0000000E]">
            <div className="header_content container m-auto flex justify-between items-center px-2">
                <div className="header_text">
                    <h2 className="cursor-pointer text-textColor text-sm  md:text-2xl font-extrabold">Where in the world?</h2>
                </div>
                <div className="log_out flex items-center cursor-pointer text-red-500" onClick={logOut}>
                    <p className="mr-2 text-xs md:text-base font-semibold leading-5">Log Out</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                    </svg>
                </div>
            </div>
        </header>
    )
}
