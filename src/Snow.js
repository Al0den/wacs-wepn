import React, { useEffect } from 'react';
import './Snow.css'; // Import the CSS for snow

const Snow = () => {
    useEffect(() => {
        const snowContainer = document.querySelector('.snow-container');
        const snowflakesCount = 100; // Number of snowflakes

        for (let i = 0; i < snowflakesCount; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
            snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random fall duration
            snowflake.style.opacity = Math.random(); // Random opacity
            snowContainer.appendChild(snowflake);
        }

        return () => {
            while (snowContainer.firstChild) {
                snowContainer.removeChild(snowContainer.firstChild);
            }
        };
    }, []);

    return <div className="snow-container"></div>;
};

export default Snow;

