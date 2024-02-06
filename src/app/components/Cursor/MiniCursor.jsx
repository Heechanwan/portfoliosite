import React, { useState, useEffect } from 'react';
import './Cursor.css'; // Импортируйте свой CSS

const MiniCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener("mousemove", updatePosition);
        return () => document.removeEventListener("mousemove", updatePosition);
    }, []);

    return (
        <div className="cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }} />
    );
};

export default MiniCursor;
