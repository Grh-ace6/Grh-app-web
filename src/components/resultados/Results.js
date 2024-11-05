// ResultsPage.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchPortarias } from '../../services/api';

export default function Results() {
  const location = useLocation();
  const { formData } = location.state || {};
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getResults = async () => {
      try {
        if (formData) {
          const data = await fetchPortarias(formData);
          setResults(data);
        }
      } catch (err) {
        setError('Erro ao buscar os resultados');
      }
    };

    getResults();
  }, [formData]);

  return (
    <div className="flex-1 max-w-128 pl-12 pt-8 bg-white">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4">Portarias</h2>
        <button
          className="w-[8.5rem] h-[2.94rem] bg-white text-black border border-[#0095DA] rounded-lg"
        >
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
                      onClick={() => console.log(`Viewing details for portaria ${item.id}`)}
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
      <div className='flex justify-end'>
      <button
          className="w-[8.5rem] h-[2.94rem] bg-white text-black border border-[#0095DA] rounded-lg"
        >
          ⭠
        </button>
        <span> pagina atual</span>
        <button
          className="w-[8.5rem] h-[2.94rem] bg-white text-black border border-[#0095DA] rounded-lg"
        >
          ⭢
        </button>
      </div>
    </div>
  );
  
}
