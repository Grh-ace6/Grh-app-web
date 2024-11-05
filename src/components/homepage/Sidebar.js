export default function Sidebar(){
    return (
    <aside className="pt-10 w-64 bg-[#0095DA] text-white flex flex-col rounded-r-xl">
        <div className="p-4 flex items-center flex-col space-x-2">
        <div className="w-16 h-16 bg-white rounded-full">
            {/* Adicionar suporte pra imagem */}
        </div> 
        <div className="pt-4">
            <span className="font-semibold text-lg">Olá,</span>
            <span className="text-lg"> Visitante</span>
        </div>
        </div>
        <nav className="flex-grow p-4 space-y-2">
        <button className="w-full text-left text-white py-2 px-4 rounded flex items-center space-x-2 / hover:bg-[#00AEFF] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 9.93841C1.5 8.71422 2.06058 7.55744 3.02142 6.79888L8.52142 2.45677C9.97466 1.30948 12.0253 1.30948 13.4786 2.45677L18.9786 6.79888C19.9394 7.55744 20.5 8.71422 20.5 9.93841V16.5C20.5 18.7091 18.7091 20.5 16.5 20.5H15C14.4477 20.5 14 20.0523 14 19.5V16.5C14 15.3954 13.1046 14.5 12 14.5H10C8.89543 14.5 8 15.3954 8 16.5V19.5C8 20.0523 7.55228 20.5 7 20.5H5.5C3.29086 20.5 1.5 18.7091 1.5 16.5L1.5 9.93841Z" stroke="white" strokeWidth="2"/>
            </svg>
            <span>Início</span>
        </button>
        <button className="w-full text-left text-white py-2 px-4 rounded flex items-center space-x-2 / hover:bg-[#00AEFF] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.9998 0H1.99976V3H-0.000244141V5H1.99976V7H-0.000244141V9H1.99976V11H-0.000244141V13H1.99976V15H-0.000244141V17H1.99976V19H-0.000244141V21H1.99976V24H18.9998C19.7954 24 20.5585 23.6839 21.1211 23.1213C21.6837 22.5587 21.9998 21.7956 21.9998 21V3C21.9998 2.20435 21.6837 1.44129 21.1211 0.87868C20.5585 0.31607 19.7954 0 18.9998 0V0ZM19.9998 21C19.9998 21.2652 19.8944 21.5196 19.7069 21.7071C19.5193 21.8946 19.265 22 18.9998 22H3.99976V2H18.9998C19.265 2 19.5193 2.10536 19.7069 2.29289C19.8944 2.48043 19.9998 2.73478 19.9998 3V21ZM11.9998 12C12.5931 12 13.1731 11.8241 13.6665 11.4944C14.1598 11.1648 14.5443 10.6962 14.7714 10.1481C14.9985 9.59987 15.0579 8.99667 14.9421 8.41473C14.8264 7.83279 14.5406 7.29824 14.1211 6.87868C13.7015 6.45912 13.167 6.1734 12.585 6.05764C12.0031 5.94189 11.3999 6.0013 10.8517 6.22836C10.3035 6.45542 9.83499 6.83994 9.50535 7.33329C9.1757 7.82664 8.99976 8.40666 8.99976 9C8.99976 9.79565 9.31583 10.5587 9.87844 11.1213C10.441 11.6839 11.2041 12 11.9998 12ZM16.9998 16V18H14.9998V16C14.9998 15.7348 14.8944 15.4804 14.7069 15.2929C14.5193 15.1054 14.265 15 13.9998 15H9.99976C9.73454 15 9.48019 15.1054 9.29265 15.2929C9.10511 15.4804 8.99976 15.7348 8.99976 16V18H6.99976V16C6.99976 15.2044 7.31583 14.4413 7.87844 13.8787C8.44104 13.3161 9.20411 13 9.99976 13H13.9998C14.7954 13 15.5585 13.3161 16.1211 13.8787C16.6837 14.4413 16.9998 15.2044 16.9998 16Z" fill="white"/>
            </svg>
            <span>Portarias</span>
        </button>
        <div className='border-b border-[#6DB2D2]'></div>
        </nav>
        <div className="p-4 space-y-2">
        <div className='border-b border-[#6DB2D2]'></div>
        </div>
        <button className="w-full text-left text-white py-2 px-4 flex items-center space-x-2 / hover:bg-[#00AEFF] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 4H5V18C5 19.1046 5.89543 20 7 20H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 15L19 12M19 12L16 9M19 12H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Sair</span>
        </button>
        <div className="p-4 space-y-2">
        <span className="text-xs">Todos os direitos reservados ©</span>
        </div>
    </aside>
    )
}