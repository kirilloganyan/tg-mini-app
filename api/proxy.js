export default async function handler(req, res) {
    try {
        // Получаем путь запроса, удаляя "/api"
        const path = req.url.replace('/api', '');

        // Конечный URL, куда будет направлен запрос
        const targetUrl = `https://95.163.229.219:8080${path}`;
        console.log(`Проксирование запроса на: ${targetUrl}`); // Лог для проверки

        const response = await fetch(targetUrl, {
            method: req.method,
            headers: {
                'Content-Type': req.headers['content-type'] || 'application/json',
                ...req.headers,
            },
            body: req.method !== 'GET' ? req.body : undefined,
        });

        // Возвращаем ответ клиенту
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Ошибка проксирования:', error);
        res.status(500).json({ error: 'Ошибка проксирования запроса', details: error.message });
    }
}
