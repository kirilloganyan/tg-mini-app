import { useEffect } from "react";

export const useTelegram = () => {
    const tg = window.Telegram.WebApp;
    useEffect(() => {
        tg.ready();
    }, []);

    return tg;
};

