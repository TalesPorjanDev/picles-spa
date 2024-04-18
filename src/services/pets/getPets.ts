import httpClient from '../api/httpClient'

export  async function getPets() {
    try {
        const response = await httpClient.get('/pets')

        return response.data
    } catch(error) {
        console.log('Erro ao buscar pets', error)
        throw error
    }
    
}