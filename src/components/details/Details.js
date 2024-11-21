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
  <div className="flex-1 max-w-128 pl-12 pt-[3.6rem]">
    <div>
    <button onClick={() => navigate(-1)} className="">
    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_21_307)">
      <path d="M24 15.8333V14.1666L8.80978 14.1924L11.8712 10.5891L10.8696 9.41077L7.62119 13.2324C7.22282 13.7013 6.99902 14.337 6.99902 14.9999C6.99902 15.6628 7.22282 16.2986 7.62119 16.7674L10.8696 20.5891L11.8712 19.4108L8.85228 15.8591L24 15.8333Z" fill="#374957"/>
      </g>
      <g clipPath="url(#clip1_21_307)">
      <path d="M15.5 30C12.4344 30 9.43763 29.1203 6.88867 27.4721C4.33971 25.8238 2.35303 23.4812 1.17987 20.7403C0.00671593 17.9994 -0.300236 14.9834 0.297835 12.0737C0.895906 9.16394 2.37214 6.49119 4.53985 4.39341C6.70757 2.29562 9.4694 0.867006 12.4761 0.288228C15.4828 -0.290551 18.5993 0.00649929 21.4316 1.14181C24.2639 2.27713 26.6846 4.19972 28.3878 6.66645C30.0909 9.13319 31 12.0333 31 15C30.9956 18.9769 29.3611 22.7897 26.4553 25.6019C23.5494 28.414 19.6095 29.9957 15.5 30V30ZM15.5 2.50001C12.9453 2.50001 10.448 3.23312 8.32389 4.60664C6.19976 5.98015 4.54419 7.93239 3.56656 10.2165C2.58893 12.5005 2.33314 15.0139 2.83153 17.4386C3.32992 19.8634 4.56012 22.0907 6.36654 23.8388C8.17297 25.587 10.4745 26.7775 12.9801 27.2598C15.4857 27.7421 18.0828 27.4946 20.443 26.5485C22.8032 25.6024 24.8205 24.0002 26.2398 21.9446C27.6591 19.889 28.4167 17.4723 28.4167 15C28.4129 11.6859 27.0508 8.50861 24.6293 6.16519C22.2078 3.82178 18.9246 2.50365 15.5 2.50001V2.50001Z" fill="#374957"/>
      </g>
      <defs>
      <clipPath id="clip0_21_307">
      <rect width="17" height="20" fill="white" transform="translate(7 5)"/>
      </clipPath>
      <clipPath id="clip1_21_307">
      <rect width="31" height="30" fill="white"/>
      </clipPath>
      </defs>
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
          <g clipPath="url(#clip0_139_1315)">
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