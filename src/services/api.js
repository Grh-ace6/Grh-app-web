const BASE_URL = 'http://127.0.0.1:8000';  // URL base do servidor FastAPI

// Função para buscar portarias
export const fetchPortarias = async (requestData) => {
  try {
    const response = await fetch(`${BASE_URL}/portarias`, {
      method: 'POST',  
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar portarias');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};

// Outras funções de requisições podem ser adicionadas aqui, como para extensão
// export const fetchExtensao = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/extensao`);
    
//     if (!response.ok) {
//       throw new Error('Erro ao buscar extensão');
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Erro:', error);
//     throw error;
//   }
// };

// Função para buscar detalhes de uma extensão específica
// export const fetchExtensaoDetalhes = async (id) => {
//   try {
//     const response = await fetch(`${BASE_URL}/extensao/${id}`);
    
//     if (!response.ok) {
//       throw new Error(`Erro ao buscar extensão com id ${id}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Erro:', error);
//     throw error;
//   }
// };
