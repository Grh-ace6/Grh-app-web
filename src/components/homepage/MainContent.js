// HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MainContent({ closeModal }) {
  const [formData, setFormData] = useState({
    pageNum: "1",
    pagina: "1",
    publico: "true",
    acao: "26",
    inicio: "true",
    solicitacao_numero: "0",
    solicitacao_ano: "0",
    solicitacao_boletim_numero: "0",
    solicitacao_boletim_ano: "0",
    solicitacao_tipo_id: "39",
    solicitacao_assunto: "",
    solicitacao_informativo: "",
    data: ""
  });
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/results', { state: { formData } });
  };

  return (
    <main className='flex-1 p-8 overflow-auto'>
      <h1 className="text-2xl font-semibold mb-6">Filtragem de ações de portarias</h1>
      <div className="pb-8">
        <div className="border-b border-[#C4C4C4]"></div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-4 gap-4">
          {/* Número Potaria */}
          <div>
            <label htmlFor="portariaNumber" className="block text-sm font-medium text-gray-700 mb-1">Número da Portaria</label>
            <input
              type="text"
              id="portariaNumber"
              name="portariaNumber"
              value={formData.portariaNumber}
              onChange={handleInputChange}
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
              value={formData.portariaYear}
              onChange={handleInputChange}
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
              value={formData.bulletinNumber}
              onChange={handleInputChange}
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
              value={formData.bulletinYear}
              onChange={handleInputChange}
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
            value={formData.solicitacao_assunto}
            onChange={handleInputChange}
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
            value={formData.solicitacao_informativo}
            onChange={handleInputChange}
            className="w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Input text"
          />
        </div>
        <div className="flex pt-12 justify-start space-x-4">
          <button
            type="submit"
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
      </form>
    </main>
  );
}
