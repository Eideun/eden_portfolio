import React from 'react';
import { CursorStyles } from "../styles/Cursor.styles";

const Cursor = ({ cursorPosition, clicked }) => {
    const cursorStyle = {
        left: cursorPosition.left - 10,
        top: cursorPosition.top - 10,
        transform: `scale(${clicked.scale})`,
        background: `${clicked.backGround}`,
        filter: clicked.filter
    };

    return (
        <CursorStyles.Cursor
            className="CursorWithBlendMode"
            style={cursorStyle}
        />
    );
};

export default Cursor;