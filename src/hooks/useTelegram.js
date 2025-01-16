import { useEffect } from "react";

const useTelegram = () => {
    useEffect(() => {
        const tg = window.Telegram.WebApp;
        tg.ready();
    }, []);

    return window.Telegram.WebApp;
};

export default useTelegram;