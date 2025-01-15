import axios from 'axios';

export async function getUserByTgId(id) {
    try {
        const response = await axios.get(`https://test-pyramid.ru:443/api/user/tg_id/${id}`, {
            headers: { 'Content-Type': 'application/json' },
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error);
        throw error;
    }
}
