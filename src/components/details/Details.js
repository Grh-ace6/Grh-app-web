import { useLocation } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


export default function Details(){
    const location = useLocation();
    const {assunto, cadastro, url, boletim_nome, imprimir_url } = location.state || {};
    console.log(imprimir_url)

    const executeImpressao = () => {
      window.open(
          imprimir_url, 
          'popupWindow', 
          'width=800,height=600,scrollbars=yes,resizable=no,toolbar=no,menubar=no,location=no,directories=no,status=no'
      );
  };

  const navigate = useNavigate();


    return (
  <div className="flex-1 max-w-128 pl-12 pt-12">
    <div>
    <button onClick={() => navigate(-1)} className="w-[5rem] h-[2.94rem] bg-white text-black border border-[#0095DA] rounded-lg flex justify-center items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.09 4.08L8.57 10.6C7.8 11.37 7.8 12.63 8.57 13.4L15.09 19.92" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </button>
    </div>
    <div className="overflow-hidden pt-3">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#0095DA] text-white">
            <tr>
              <th className="py-6 px-10 text-left">Número</th>
              <th className="py-6 px-10 text-left">Data</th>
              <th className="py-6 px-10 text-left">Assunto</th>
              <th className="py-6 px-10 text-left">Boletim</th>
            </tr>
          </thead>
          <thead className="bg-[#E0E0E066] text-[#4F4F4F]">
            <tr>
              <th className="py-6 px-10 text-left">Número</th>
              <th className="py-6 px-10 text-left">{cadastro}</th>
              <th className="py-6 px-10 text-left max-w-[48rem] truncate">{assunto}</th>
              <th className="py-6 px-10 text-left">{boletim_nome}</th>
            </tr>
          </thead>
        </table>
        <div className="w-full h-128 border shadow-lg">
          <iframe
            src={url}
            className="w-full h-full border-none"
            title="External Page Viewer"
          />
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <svg className='mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_139_1315)">
          <path d="M24 9C24 8.20435 23.6839 7.44129 23.1213 6.87868C22.5587 6.31607 21.7956 6 21 6H19V0H5V6H3C2.20435 6 1.44129 6.31607 0.87868 6.87868C0.31607 7.44129 0 8.20435 0 9L0 21H5V24H19V21H24V9ZM7 2H17V6H7V2ZM17 22H7V16H17V22ZM22 19H19V14H5V19H2V9C2 8.73478 2.10536 8.48043 2.29289 8.29289C2.48043 8.10536 2.73478 8 3 8H21C21.2652 8 21.5196 8.10536 21.7071 8.29289C21.8946 8.48043 22 8.73478 22 9V19Z" fill="#374957"/>
          <path d="M19 9.99927H15V11.9993H19V9.99927Z" fill="#374957"/>
          </g>
          <defs>
          <clipPath id="clip0_139_1315">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
      </svg> 
      <button onClick={executeImpressao}>
      Imprimir Portaria
      </button>
        
    </div> 
  </div>
);

}