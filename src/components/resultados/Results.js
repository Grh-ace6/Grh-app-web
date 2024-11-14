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
  const [tempPageNum, setTempPageNum] = useState(''); // Valor temporario

  const incrementPage = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      pageNum: Math.min((parseInt(prevFormData.pageNum) + 1),results[0].paginas_maximo).toString(),
      pagina: Math.min((parseInt(prevFormData.pagina) + 1), results[0].paginas_maximo).toString(),
      inicio: "false",
    }));
  };

  const decrementPage = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      pageNum: (Math.max(parseInt(prevFormData.pageNum) - 1, 1)).toString(),
      pagina: (Math.max(parseInt(prevFormData.pagina) - 1, 1)).toString(),
    }));
  };

  const handleInputChange = (e) => {
    setTempPageNum(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Se o valor for um número válido, atualiza o formData
      const newPageNum = Math.max(parseInt(tempPageNum), 1);
      if (!isNaN(newPageNum)) {
        setFormData({
          ...formData,
          pageNum: newPageNum.toString(),
          pagina: newPageNum.toString(),
        });
      }
    }
  };

  useEffect(() => {
    const getResults = async () => {
      try {
        if (formData) {
          const data = await fetchPortarias(formData);
          setResults(data);
          setCurrentPage(formData.pageNum); // Atualiza o número da página
        }
      } catch (err) {
        setError('Erro ao buscar os resultados');
      }
    };
  
    getResults();
  }, [formData]);

  const navigate = useNavigate();

  return (
    <div className="flex-1 max-w-128 pl-12 pt-8 bg-white">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4">Portarias</h2>
        <button onClick={() => navigate('/')}
          className="w-[10rem] flex justify-center items-center h-[2.94rem] bg-white text-black border border-[#0095DA] rounded-lg"
        >
          <svg className='mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_139_1261)">
          <path d="M10.7 2.62535C10.4188 2.02749 9.9733 1.522 9.41551 1.16794C8.85771 0.813871 8.21068 0.625854 7.55 0.625854C6.88932 0.625854 6.24229 0.813871 5.68449 1.16794C5.1267 1.522 4.68118 2.02749 4.4 2.62535H0V5.62535H4.395C4.67618 6.2232 5.1217 6.7287 5.67949 7.08276C6.23729 7.43683 6.88432 7.62484 7.545 7.62484C8.20568 7.62484 8.85271 7.43683 9.41051 7.08276C9.9683 6.7287 10.4138 6.2232 10.695 5.62535H24V2.62535H10.7Z" fill="#333333"/>
          <path d="M16.455 8.49939C15.7944 8.50057 15.1477 8.68911 14.5899 9.04312C14.0321 9.39714 13.5863 9.90211 13.304 10.4994H0V13.4994H13.3C13.5812 14.0972 14.0267 14.6027 14.5845 14.9568C15.1423 15.3109 15.7893 15.4989 16.45 15.4989C17.1107 15.4989 17.7577 15.3109 18.3155 14.9568C18.8733 14.6027 19.3188 14.0972 19.6 13.4994H24V10.4994H19.605C19.3228 9.90226 18.8771 9.3974 18.3195 9.04339C17.762 8.68939 17.1154 8.50075 16.455 8.49939Z" fill="#333333"/>
          <path d="M7.545 16.3744C6.88455 16.3758 6.23804 16.5644 5.68048 16.9184C5.12292 17.2724 4.67718 17.7773 4.395 18.3744H0V21.3744H4.395C4.67618 21.9722 5.1217 22.4777 5.67949 22.8318C6.23729 23.1859 6.88432 23.3739 7.545 23.3739C8.20568 23.3739 8.85271 23.1859 9.41051 22.8318C9.9683 22.4777 10.4138 21.9722 10.695 21.3744H24V18.3744H10.7C10.4175 17.7765 9.97094 17.2711 9.41241 16.9171C8.85388 16.563 8.2063 16.3748 7.545 16.3744Z" fill="#333333"/>
          </g>
          <defs>
          <clipPath id="clip0_139_1261">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          Filtrar
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
  
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
                  key={item.id}
                  className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#E0E0E066]'}`}
                >
                  <td className="py-6 px-[1.49rem]">{item.cadastro}</td>
                  <td className="py-6 px-[1.4rem]">{item.tipo}</td>
                  <td className="py-6 px-4 max-w-[48rem] truncate">{item.assunto}</td>
                  <td className="py-6 px-[1.8rem]">{item.boletim.nome}</td>
                  <td className="py-6 px-2">
                    <button
                      onClick={() => navigate('/results/sei', { state: {cadastro: item.cadastro, assunto: item.assunto,  url: item.url_detalhes, boletim_nome: item.boletim.nome, imprimir_url: item.imprimir_url}})}
                      className="text-blue-500 hover:underline"
                    >
                      Ver detalhes
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
            <path d="M15.09 4.08L8.57 10.6C7.8 11.37 7.8 12.63 8.57 13.4L15.09 19.92" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
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
            <path d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
  
}
