import axios from "axios";

export async function getUsers() {
    try {
        const response = await axios.get(`https://95.163.229.219:8080/api/user`, {
            headers: { 'Content-Type': 'application/json' },
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error);
        throw error;
    }
}
