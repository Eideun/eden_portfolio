import React from 'react';
import { Cursor, CursorWrapper } from "../styles/Cursor.styles"

const CustomCursor = ({ cursorPosition, clicked }) => {
    return (
            <Cursor
                className="CursorWithBlendMode"
                cursorPosition={cursorPosition}
                clicked={clicked}
            />
    );
};

export default CustomCursor;