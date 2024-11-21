// ResultsPage.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchPortarias } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export default function Results() {
  const location = useLocation();
  const initialFormData = location.state?.formData || {}; // Carrega o formData inicial do navigate
  const [formData, setFormData] = useState(initialFormData);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(formData.pageNum);
  const [tempPageNum, setTempPageNum] = useState(''); // Valor temporário
  const [isModalOpen, setModalOpen] = useState(false);
  const [tempFormData, setTempFormData] = useState(initialFormData); //FormData temporário


  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const incrementPage = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      pageNum: Math.min(parseInt(prevFormData.pageNum || 1) + 1, results[0]?.paginas_maximo || 1).toString(),
      pagina: Math.min((parseInt(prevFormData.pagina) + 1), results[0].paginas_maximo).toString(),
      inicio: "false",
    }));
  };

  const decrementPage = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      pageNum: (Math.max(parseInt(prevFormData.pageNum) - 1, 1)).toString(),
      pagina: (Math.max(parseInt(prevFormData.pagina) - 1, 1)).toString(),
      inicio: "false",
    }));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Se o valor for um número válido, atualiza o formData
      const newPageNum = Math.min(parseInt(tempPageNum), results[0].paginas_maximo);
      if (!isNaN(newPageNum)) {
        setFormData({
          ...formData,
          pageNum: newPageNum.toString(),
          pagina: newPageNum.toString(),
          inicio: "false",
        });
      }
    }
  };

  const handleInputChange = (e) => {
    setTempPageNum(e.target.value);
  };

  const handlePopupChange = (e) => {
    const { name, value } = e.target;
    setTempFormData((prevTempFormData) => ({
      ...prevTempFormData,
      [name]: value,
    }));
  };

  const handleConsultar = () => {
    setFormData(tempFormData);
    closeModal();
  };

  useEffect(() => {
    const getResults = async () => {
      try {
        if (formData) {
          const data = await fetchPortarias(formData);
          setError("");
          setResults(data);
          setCurrentPage(formData.pageNum); // Atualiza o número da página
        }
      } catch (err) {
        setError("Não foram encontrados resultados para busca com estes parâmetros");
      }
    };
  
    getResults();
  }, [formData]);

  const navigate = useNavigate();

  return (
    <div className="flex-1 max-w-128 pl-12 pt-8 bg-white">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4">Portarias</h2>
        <button onClick={openModal}
          className=""
        >
          <svg width="136" height="47" viewBox="0 0 136 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="134" height="45" rx="7" stroke="#0095DA" strokeWidth="2"/>
          <path d="M66.0114 29.5V17.8636H73.7159V19.892H68.4716V22.6648H73.2045V24.6932H68.4716V29.5H66.0114ZM75.3253 29.5V20.7727H77.7457V29.5H75.3253ZM76.5412 19.6477C76.1813 19.6477 75.8726 19.5284 75.6151 19.2898C75.3613 19.0473 75.2344 18.7576 75.2344 18.4205C75.2344 18.0871 75.3613 17.8011 75.6151 17.5625C75.8726 17.3201 76.1813 17.1989 76.5412 17.1989C76.901 17.1989 77.2079 17.3201 77.4616 17.5625C77.7192 17.8011 77.848 18.0871 77.848 18.4205C77.848 18.7576 77.7192 19.0473 77.4616 19.2898C77.2079 19.5284 76.901 19.6477 76.5412 19.6477ZM82.1051 17.8636V29.5H79.6847V17.8636H82.1051ZM88.6861 20.7727V22.5909H83.4304V20.7727H88.6861ZM84.6236 18.6818H87.044V26.8182C87.044 27.0417 87.0781 27.2159 87.1463 27.3409C87.2145 27.4621 87.3092 27.5473 87.4304 27.5966C87.5554 27.6458 87.6993 27.6705 87.8622 27.6705C87.9759 27.6705 88.0895 27.661 88.2031 27.642C88.3168 27.6193 88.4039 27.6023 88.4645 27.5909L88.8452 29.392C88.724 29.4299 88.5535 29.4735 88.3338 29.5227C88.1141 29.5758 87.8471 29.608 87.5327 29.6193C86.9493 29.642 86.438 29.5644 85.9986 29.3864C85.563 29.2083 85.224 28.9318 84.9815 28.5568C84.7391 28.1818 84.6198 27.7083 84.6236 27.1364V18.6818ZM90.2628 29.5V20.7727H92.6094V22.2955H92.7003C92.8594 21.7538 93.1264 21.3447 93.5014 21.0682C93.8764 20.7879 94.3082 20.6477 94.7969 20.6477C94.9181 20.6477 95.0488 20.6553 95.1889 20.6705C95.3291 20.6856 95.4522 20.7064 95.5582 20.733V22.8807C95.4446 22.8466 95.2874 22.8163 95.0866 22.7898C94.8859 22.7633 94.7022 22.75 94.5355 22.75C94.1795 22.75 93.8613 22.8277 93.581 22.983C93.3045 23.1345 93.0848 23.3466 92.9219 23.6193C92.7628 23.892 92.6832 24.2064 92.6832 24.5625V29.5H90.2628ZM99.0483 29.6648C98.4915 29.6648 97.9953 29.5682 97.5597 29.375C97.1241 29.178 96.7794 28.8883 96.5256 28.5057C96.2756 28.1193 96.1506 27.6383 96.1506 27.0625C96.1506 26.5777 96.2396 26.1705 96.4176 25.8409C96.5956 25.5114 96.8381 25.2462 97.1449 25.0455C97.4517 24.8447 97.8002 24.6932 98.1903 24.5909C98.5843 24.4886 98.9972 24.4167 99.429 24.375C99.9366 24.322 100.346 24.2727 100.656 24.2273C100.967 24.178 101.192 24.1061 101.332 24.0114C101.473 23.9167 101.543 23.7765 101.543 23.5909V23.5568C101.543 23.197 101.429 22.9186 101.202 22.7216C100.978 22.5246 100.66 22.4261 100.247 22.4261C99.8116 22.4261 99.465 22.5227 99.2074 22.7159C98.9498 22.9053 98.7794 23.1439 98.696 23.4318L96.4574 23.25C96.571 22.7197 96.7945 22.2614 97.1278 21.875C97.4612 21.4848 97.8911 21.1856 98.4176 20.9773C98.9479 20.7652 99.5616 20.6591 100.259 20.6591C100.743 20.6591 101.207 20.7159 101.651 20.8295C102.098 20.9432 102.493 21.1193 102.838 21.358C103.187 21.5966 103.461 21.9034 103.662 22.2784C103.863 22.6496 103.963 23.0947 103.963 23.6136V29.5H101.668V28.2898H101.599C101.459 28.5625 101.272 28.803 101.037 29.0114C100.802 29.2159 100.52 29.3769 100.19 29.4943C99.8608 29.608 99.4801 29.6648 99.0483 29.6648ZM99.7415 27.9943C100.098 27.9943 100.412 27.9242 100.685 27.7841C100.957 27.6402 101.171 27.447 101.327 27.2045C101.482 26.9621 101.56 26.6875 101.56 26.3807V25.4545C101.484 25.5038 101.38 25.5492 101.247 25.5909C101.118 25.6288 100.973 25.6648 100.81 25.6989C100.647 25.7292 100.484 25.7576 100.321 25.7841C100.158 25.8068 100.01 25.8277 99.8778 25.8466C99.5938 25.8883 99.3456 25.9545 99.1335 26.0455C98.9214 26.1364 98.7566 26.2595 98.6392 26.4148C98.5218 26.5663 98.4631 26.7557 98.4631 26.983C98.4631 27.3125 98.5824 27.5644 98.821 27.7386C99.0634 27.9091 99.3703 27.9943 99.7415 27.9943ZM105.841 29.5V20.7727H108.188V22.2955H108.278C108.438 21.7538 108.705 21.3447 109.08 21.0682C109.455 20.7879 109.886 20.6477 110.375 20.6477C110.496 20.6477 110.627 20.6553 110.767 20.6705C110.907 20.6856 111.03 20.7064 111.136 20.733V22.8807C111.023 22.8466 110.866 22.8163 110.665 22.7898C110.464 22.7633 110.28 22.75 110.114 22.75C109.758 22.75 109.439 22.8277 109.159 22.983C108.883 23.1345 108.663 23.3466 108.5 23.6193C108.341 23.892 108.261 24.2064 108.261 24.5625V29.5H105.841Z" fill="#333333"/>
          <g clipPath="url(#clip0_96_456)">
          <path d="M35.7 14.6253C35.4188 14.0275 34.9733 13.522 34.4155 13.1679C33.8577 12.8139 33.2107 12.6259 32.55 12.6259C31.8893 12.6259 31.2423 12.8139 30.6845 13.1679C30.1267 13.522 29.6812 14.0275 29.4 14.6253H25V17.6253H29.395C29.6762 18.2232 30.1217 18.7287 30.6795 19.0828C31.2373 19.4368 31.8843 19.6248 32.545 19.6248C33.2057 19.6248 33.8527 19.4368 34.4105 19.0828C34.9683 18.7287 35.4138 18.2232 35.695 17.6253H49V14.6253H35.7Z" fill="#333333"/>
          <path d="M41.455 20.4994C40.7944 20.5006 40.1477 20.6891 39.5899 21.0431C39.0321 21.3971 38.5863 21.9021 38.304 22.4994H25V25.4994H38.3C38.5812 26.0972 39.0267 26.6027 39.5845 26.9568C40.1423 27.3109 40.7893 27.4989 41.45 27.4989C42.1107 27.4989 42.7577 27.3109 43.3155 26.9568C43.8733 26.6027 44.3188 26.0972 44.6 25.4994H49V22.4994H44.605C44.3228 21.9023 43.8771 21.3974 43.3195 21.0434C42.762 20.6894 42.1154 20.5008 41.455 20.4994Z" fill="#333333"/>
          <path d="M32.545 28.3744C31.8846 28.3758 31.238 28.5644 30.6805 28.9184C30.1229 29.2724 29.6772 29.7773 29.395 30.3744H25V33.3744H29.395C29.6762 33.9722 30.1217 34.4777 30.6795 34.8318C31.2373 35.1859 31.8843 35.3739 32.545 35.3739C33.2057 35.3739 33.8527 35.1859 34.4105 34.8318C34.9683 34.4777 35.4138 33.9722 35.695 33.3744H49V30.3744H35.7C35.4175 29.7765 34.9709 29.2711 34.4124 28.9171C33.8539 28.563 33.2063 28.3748 32.545 28.3744Z" fill="#333333"/>
          </g>
          <defs>
          <clipPath id="clip0_96_456">
          <rect width="24" height="24" fill="white" transform="translate(25 12)"/>
          </clipPath>
          </defs>
          </svg>
        </button>
      </div>
      {error &&(
          <div className='flex'> 
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.9998" cy="12.9998" r="10.8333" transform="rotate(60 12.9998 12.9998)" fill="#EB5757" stroke="#EB5757" strokeWidth="2"/>
            <path d="M18.3623 7.89648C18.3623 7.89648 17.692 8.56677 13.3831 12.8757C9.07415 17.1846 7.63784 18.6209 7.63784 18.6209" stroke="white" strokeWidth="2"/>
            <path d="M7.6377 7.89648C7.6377 7.89648 8.30799 8.56678 12.6169 12.8757C16.9259 17.1846 18.3622 18.621 18.3622 18.621" stroke="white" strokeWidth="2"/>
            </svg>
            <p className="text-red-500">{error}</p>
          </div>
        )
      }

      {/* Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg ">
          <main className='flex-1 p-8 overflow-auto'>
            <h1 className="text-2xl font-semibold mb-6">Filtragem de ações de portarias</h1>
            <div className="pb-8">
              <div className="border-b border-[#C4C4C4]"></div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-4">
                {/* Número Potaria */}
                <div>
                  <label htmlFor="portariaNumber" className="block text-sm font-medium text-gray-700 mb-1">Número da Portaria</label>
                  <input
                    type="text"
                    id="portariaNumber"
                    name="portariaNumber"
                    value={tempFormData.portariaNumber}
                    onChange={handlePopupChange}
                    className="w-half px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Input text"
                  />
                </div>
                {/* Ano Portaria */}
                <div>
                  <label htmlFor="portariaYear" className="block text-sm font-medium text-gray-700 mb-1">Ano da Portaria</label>
                  <input
                    type="text"
                    id="portariaYear"
                    name="portariaYear"
                    value={tempFormData.portariaYear}
                    onChange={handlePopupChange}
                    className="w-half px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Input text"
                  />
                </div>
                <div></div>
                <div></div>
                {/* Número Boletim */}
                <div>
                  <label htmlFor="bulletinNumber" className="block text-sm font-medium text-gray-700 mb-1">Número do boletim</label>
                  <input
                    type="text"
                    id="bulletinNumber"
                    name="bulletinNumber"
                    value={tempFormData.bulletinNumber}
                    onChange={handlePopupChange}
                    className="w-half px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Input text"
                  />
                </div>
                {/* Ano Boletim */}
                <div>
                  <label htmlFor="bulletinYear" className="block text-sm font-medium text-gray-700 mb-1">Ano do boletim</label>
                  <input
                    type="text"
                    id="bulletinYear"
                    name="bulletinYear"
                    value={tempFormData.bulletinYear}
                    onChange={handlePopupChange}
                    className="w-half px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Input text"
                  />
                </div>
              </div>
              {/* Fim da Grid */}
              <div className=''>
                <label htmlFor="solicitacao_assunto" className="pt-4 block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                <input
                  type="text"
                  id="solicitacao_assunto"
                  name="solicitacao_assunto"
                  value={tempFormData.solicitacao_assunto}
                  onChange={handlePopupChange}
                  className="w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Input text"
                />
              </div>
              <div>
                <label htmlFor="solicitacao_informativo" className="pt-4 block text-sm font-medium text-gray-700 mb-1">Conteúdo</label>
                <input
                  type="text"
                  id="solicitacao_informativo"
                  name="solicitacao_informativo"
                  value={tempFormData.solicitacao_informativo}
                  onChange={handlePopupChange}
                  className="w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Input text"
                />
              </div>
              <div className="flex pt-12 justify-start space-x-4">
                <button
                  onClick={handleConsultar}
                  className="px-8 py-2 bg-[#0095DA] text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Consultar
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-8 py-2 bg-white text-gray-700 rounded-md border border-blue-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </main>
          </div>
        </div>
      )}
  
      <div className="border border-gray-300 rounded-lg">
        <table className="w-full">
          <thead className="bg-[#0095DA] text-white">
            <tr>
              <th className="">Cadastro</th>
              <th className="pr-7">Tipo</th>
              <th className="min-w-[25rem]">Assunto</th>
              <th className="">Boletim</th>
              <th className="py-6 text-[#0095DA]">Detalhes</th>
            </tr>
          </thead>
        </table>
  
        {/* Div que contém apenas o tbody com o scroll */}
        <div className="overflow-y-auto max-h-128">
          <table className="w-full">
            <tbody>
              {results.slice(0, 20).map((item, index) => (
                <tr
                  key={item.id || index}
                  className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#E0E0E066]'}`}
                >
                  <td className="py-6 px-[1.5rem]">{item.cadastro}</td>
                  <td className="py-6 px-[1.5rem]">{item.tipo}</td>
                  <td className="py-6 px-4 max-w-[48rem] truncate">{item.assunto}</td>
                  <td className="py-6 px-[1.5rem]">{item.boletim.nome}</td>
                  <td className="py-6 px-10">
                    <button
                      onClick={() => navigate('/results/detalhes', { state: {cadastro: item.cadastro, assunto: item.assunto,  url: item.url_detalhes, boletim_nome: item.boletim.nome, imprimir_url: item.imprimir_url}})}
                      className="text-blue-500 hover:underline"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_139_1252)">
                        <path d="M23.8209 11.181C22.9429 9.261 19.4999 3 11.9999 3C4.49987 3 1.05687 9.261 0.178871 11.181C0.0610095 11.4383 0 11.718 0 12.001C0 12.284 0.0610095 12.5637 0.178871 12.821C1.05687 14.739 4.49987 21 11.9999 21C19.4999 21 22.9429 14.739 23.8209 12.819C23.9385 12.562 23.9994 12.2827 23.9994 12C23.9994 11.7173 23.9385 11.438 23.8209 11.181ZM11.9999 19C5.69287 19 2.74987 13.634 1.99987 12.011C2.74987 10.366 5.69287 5 11.9999 5C18.2919 5 21.2359 10.343 21.9999 12C21.2359 13.657 18.2919 19 11.9999 19Z" fill="#374957"/>
                        <path d="M12 7.00037C11.0111 7.00037 10.0444 7.29361 9.22215 7.84302C8.39991 8.39243 7.75904 9.17332 7.3806 10.0869C7.00217 11.0006 6.90315 12.0059 7.09608 12.9758C7.289 13.9457 7.76521 14.8366 8.46447 15.5359C9.16373 16.2352 10.0546 16.7114 11.0246 16.9043C11.9945 17.0972 12.9998 16.9982 13.9134 16.6198C14.827 16.2413 15.6079 15.6005 16.1574 14.7782C16.7068 13.956 17 12.9893 17 12.0004C16.9984 10.6748 16.4711 9.40392 15.5338 8.46659C14.5964 7.52925 13.3256 7.00195 12 7.00037ZM12 15.0004C11.4067 15.0004 10.8266 14.8244 10.3333 14.4948C9.83994 14.1651 9.45543 13.6966 9.22836 13.1484C9.0013 12.6002 8.94189 11.997 9.05765 11.4151C9.1734 10.8332 9.45912 10.2986 9.87868 9.87905C10.2982 9.45949 10.8328 9.17377 11.4147 9.05801C11.9967 8.94225 12.5999 9.00166 13.1481 9.22873C13.6962 9.45579 14.1648 9.84031 14.4944 10.3337C14.8241 10.827 15 11.407 15 12.0004C15 12.796 14.6839 13.5591 14.1213 14.1217C13.5587 14.6843 12.7957 15.0004 12 15.0004Z" fill="#374957"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_139_1252">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        </div>
      <div className='flex justify-center items-center space-x-4'>
        {/* Botão de Decrementar */}
        <button 
          onClick={decrementPage} 
          className="w-[5rem] h-[2.94rem] bg-white text-black border border-[#0095DA] rounded-lg flex justify-center items-center"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.09 4.08L8.57 10.6C7.8 11.37 7.8 12.63 8.57 13.4L15.09 19.92" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {/* Campo de Input */}
        <div className="pt-2 flex flex-col items-center">
          <input
            type="text"
            id="pageNumber"
            name="pageNum"
            value={tempPageNum}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="w-[5rem] h-[2.94rem] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-center"
            placeholder=""
          />
          
          {/* Texto de Página */}
          <span className="text-lg font-bold text-center">
          Página {currentPage} de {results.length > 0 ? results[0].paginas_maximo : '?'}
          </span>
        </div>

        {/* Botão de Incrementar */}
        <button 
          onClick={incrementPage} 
          className="w-[5rem] h-[2.94rem] bg-white text-black border border-[#0095DA] rounded-lg flex justify-center items-center"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
  
}
