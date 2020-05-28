import { useEffect, useState } from 'react';

export const useWindowSize = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const watchWindowSize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', watchWindowSize);

        return () => window.removeEventListener('resize', watchWindowSize);

    }, [setSize]);

    return {
        size
    }

};