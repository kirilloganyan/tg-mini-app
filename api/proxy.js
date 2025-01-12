export default async function handler(req, res) {
    try {
        const path = req.url.replace('/api', '');

        const targetUrl = `http://95.163.229.219:8080${path}`;
        console.log(`Проксирование запроса на: ${targetUrl}`);

        const response = await fetch(targetUrl, {
            method: req.method,
            headers: {
                'Content-Type': req.headers['content-type'] || 'application/json',
                ...req.headers,
            },
            body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined
        });

        // Возвращаем ответ от вашего сервера
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Ошибка проксирования:', error);
        res.status(500).json({ error: 'Ошибка проксирования запроса', details: error.message });
    }
}
