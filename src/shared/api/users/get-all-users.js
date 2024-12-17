import axios from "axios";

export async function getUsers() {
    try {
        const response = await axios.get(`http://91.197.98.228:8080/api/user`, {
            headers: { 'Content-Type': 'application/json' },
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error);
        throw error;
    }
}
