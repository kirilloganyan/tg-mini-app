export default async function handler(req, res) {
    try {
        const path = req.url.replace('/api', '');

        const response = await fetch(`http://95.163.229.219:8080${path}`, {
            method: req.method,
            headers: {
                'Content-Type': req.headers['content-type'] || 'application/json',
            },
            body: req.method !== 'GET' ? req.body : undefined,
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Ошибка прокси-сервера:', error);
        res.status(500).json({ error: 'Ошибка проксирования запроса' });
    }
}
