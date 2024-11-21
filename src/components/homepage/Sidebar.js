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
        <button onClick={() => navigate('/')} className="w-full text-left text-white py-2 px-4 rounded flex items-center space-x-2 / hover:bg-[#00AEFF] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_139_1460)">
            <path d="M19.9998 0H2.99976V3H0.999756V5H2.99976V7H0.999756V9H2.99976V11H0.999756V13H2.99976V15H0.999756V17H2.99976V19H0.999756V21H2.99976V24H19.9998C20.7954 24 21.5585 23.6839 22.1211 23.1213C22.6837 22.5587 22.9998 21.7956 22.9998 21V3C22.9998 2.20435 22.6837 1.44129 22.1211 0.87868C21.5585 0.31607 20.7954 0 19.9998 0V0ZM20.9998 21C20.9998 21.2652 20.8944 21.5196 20.7069 21.7071C20.5193 21.8946 20.265 22 19.9998 22H4.99976V2H19.9998C20.265 2 20.5193 2.10536 20.7069 2.29289C20.8944 2.48043 20.9998 2.73478 20.9998 3V21ZM12.9998 12C13.5931 12 14.1731 11.8241 14.6665 11.4944C15.1598 11.1648 15.5443 10.6962 15.7714 10.1481C15.9985 9.59987 16.0579 8.99667 15.9421 8.41473C15.8264 7.83279 15.5406 7.29824 15.1211 6.87868C14.7015 6.45912 14.167 6.1734 13.585 6.05764C13.0031 5.94189 12.3999 6.0013 11.8517 6.22836C11.3035 6.45542 10.835 6.83994 10.5053 7.33329C10.1757 7.82664 9.99976 8.40666 9.99976 9C9.99976 9.79565 10.3158 10.5587 10.8784 11.1213C11.441 11.6839 12.2041 12 12.9998 12ZM17.9998 16V18H15.9998V16C15.9998 15.7348 15.8944 15.4804 15.7069 15.2929C15.5193 15.1054 15.265 15 14.9998 15H10.9998C10.7345 15 10.4802 15.1054 10.2926 15.2929C10.1051 15.4804 9.99976 15.7348 9.99976 16V18H7.99976V16C7.99976 15.2044 8.31583 14.4413 8.87844 13.8787C9.44104 13.3161 10.2041 13 10.9998 13H14.9998C15.7954 13 16.5585 13.3161 17.1211 13.8787C17.6837 14.4413 17.9998 15.2044 17.9998 16Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_139_1460">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
        </svg>

            <span>Portarias</span>
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