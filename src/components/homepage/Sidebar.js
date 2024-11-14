import { useNavigate } from 'react-router-dom';


export default function Sidebar(){

    const navigate = useNavigate();

    return (
    <aside className="pt-10 w-64 bg-[#0095DA] text-white flex flex-col rounded-r-xl">
        <div className="p-4 flex items-center flex-col space-x-2">
        <div className="pt-4">
            <span className="font-semibold text-lg">Olá,</span>
            <span className="text-lg"> Visitante</span>
        </div>
        </div>
        <nav className="flex-grow p-4 space-y-2">
        <button onClick={()=> navigate('/')} className="w-full text-left text-white py-2 px-4 rounded flex items-center space-x-2 / hover:bg-[#00AEFF] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 9.93841C1.5 8.71422 2.06058 7.55744 3.02142 6.79888L8.52142 2.45677C9.97466 1.30948 12.0253 1.30948 13.4786 2.45677L18.9786 6.79888C19.9394 7.55744 20.5 8.71422 20.5 9.93841V16.5C20.5 18.7091 18.7091 20.5 16.5 20.5H15C14.4477 20.5 14 20.0523 14 19.5V16.5C14 15.3954 13.1046 14.5 12 14.5H10C8.89543 14.5 8 15.3954 8 16.5V19.5C8 20.0523 7.55228 20.5 7 20.5H5.5C3.29086 20.5 1.5 18.7091 1.5 16.5L1.5 9.93841Z" stroke="white" strokeWidth="2"/>
            </svg>
            <span>Início</span>
        </button>
        <div className='border-b border-[#6DB2D2]'></div>
        </nav>
        <div className="p-4 space-y-2">
        <div className='border-b border-[#6DB2D2]'></div>
        </div>
        <div className="p-4 space-y-2">
        <span className="text-xs">Todos os direitos reservados ©</span>
        </div>
    </aside>
    )
}